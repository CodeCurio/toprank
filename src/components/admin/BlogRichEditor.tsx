"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Highlight from "@tiptap/extension-highlight";
import TextAlign from "@tiptap/extension-text-align";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { TextStyle } from "@tiptap/extension-text-style";
import CharacterCount from "@tiptap/extension-character-count";
import { useEffect, useRef, useCallback } from "react";
import { useAdminTheme } from "./AdminThemeContext";

// ─── Icon Components ──────────────────────────────────────────────────────────
function Icon({ children, title }: { children: React.ReactNode; title?: string }) {
  return (
    <span title={title} className="flex items-center justify-center w-4 h-4 leading-none">
      {children}
    </span>
  );
}

// ─── Toolbar Button ───────────────────────────────────────────────────────────
function ToolbarBtn({
  onClick,
  active,
  disabled,
  title,
  children,
  isLight,
}: {
  onClick: () => void;
  active?: boolean;
  disabled?: boolean;
  title: string;
  children: React.ReactNode;
  isLight: boolean;
}) {
  return (
    <button
      type="button"
      onMouseDown={(e) => {
        e.preventDefault();
        if (!disabled) onClick();
      }}
      title={title}
      disabled={disabled}
      className={`relative flex items-center justify-center w-8 h-8 rounded-lg text-sm font-bold transition-all select-none shrink-0
        ${active
          ? "bg-blue-600 text-white shadow-sm shadow-blue-500/30"
          : isLight
          ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
          : "text-slate-400 hover:bg-slate-700 hover:text-white"
        }
        ${disabled ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}
      `}
    >
      {children}
    </button>
  );
}

// ─── Separator ────────────────────────────────────────────────────────────────
function Sep({ isLight }: { isLight: boolean }) {
  return (
    <div className={`w-px h-5 mx-0.5 ${isLight ? "bg-slate-200" : "bg-slate-700"}`} />
  );
}

// ─── Main Editor Component ────────────────────────────────────────────────────
interface BlogRichEditorProps {
  value: string;
  onChange: (html: string) => void;
  placeholder?: string;
}

export default function BlogRichEditor({
  value,
  onChange,
  placeholder = "Start writing your blog post content here...",
}: BlogRichEditorProps) {
  const { isLight } = useAdminTheme();
  const imageInputRef = useRef<HTMLInputElement>(null);
  const uploadingRef = useRef(false);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        heading: { levels: [1, 2, 3, 4] },
        bulletList: { keepMarks: true, keepAttributes: false },
        orderedList: { keepMarks: true, keepAttributes: false },
      }),
      Underline,
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({ types: ["heading", "paragraph"] }),
      TextStyle,
      Image.configure({
        inline: false,
        allowBase64: false,
        resize: false,
        HTMLAttributes: {
          class: "blog-inline-image",
        },
      }),
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "blog-link",
          rel: "noopener noreferrer",
          target: "_blank",
        },
      }),
      CharacterCount,
    ],
    content: value || "",
    onUpdate({ editor }) {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "blog-editor-area focus:outline-none",
        "data-placeholder": placeholder,
      },
    },
  });

  // Sync value when externally changed (e.g., loading existing post)
  useEffect(() => {
    if (!editor) return;
    const current = editor.getHTML();
    if (value !== current) {
      // Only update if value is meaningfully different (avoid cursor reset on every keystroke)
      if (value === "" || value === "<p></p>") {
        editor.commands.clearContent(true);
      } else if (current !== value) {
        editor.commands.setContent(value, { emitUpdate: false });
      }
    }
  }, [value, editor]);

  // ── Link handler
  const handleSetLink = useCallback(() => {
    if (!editor) return;
    const prev = editor.getAttributes("link").href;
    const url = window.prompt("Enter URL:", prev || "https://");
    if (url === null) return;
    if (url === "") {
      editor.chain().focus().unsetLink().run();
    } else {
      editor.chain().focus().setLink({ href: url }).run();
    }
  }, [editor]);

  // ── Inline image upload
  const handleImageUpload = useCallback(
    async (file: File) => {
      if (uploadingRef.current) return;
      uploadingRef.current = true;

      try {
        const fd = new FormData();
        fd.append("file", file);
        const res = await fetch("/api/upload", { method: "POST", body: fd });
        const json = await res.json();
        if (!res.ok || json.error) throw new Error(json.error || "Upload failed");

        // Insert image immediately; user can click it to add alt text via context menu
        editor?.chain().focus().setImage({ src: json.url, alt: file.name }).run();
      } catch (err: any) {
        alert("Image upload failed: " + err.message);
      } finally {
        uploadingRef.current = false;
        if (imageInputRef.current) imageInputRef.current.value = "";
      }
    },
    [editor]
  );

  if (!editor) return null;

  const isActive = (name: string, attrs?: Record<string, unknown>) =>
    editor.isActive(name, attrs);

  return (
    <div
      className={`rounded-2xl border overflow-hidden transition-colors ${
        isLight
          ? "border-slate-200 bg-white shadow-sm"
          : "border-slate-700 bg-slate-900"
      }`}
    >
      {/* ── Toolbar ── */}
      <div
        className={`flex flex-wrap items-center gap-0.5 px-3 py-2 border-b ${
          isLight ? "bg-slate-50 border-slate-200" : "bg-slate-800 border-slate-700"
        }`}
      >
        {/* Headings */}
        <ToolbarBtn
          isLight={isLight}
          title="Heading 1"
          active={isActive("heading", { level: 1 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        >
          <span className="text-xs font-black">H1</span>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Heading 2"
          active={isActive("heading", { level: 2 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        >
          <span className="text-xs font-black">H2</span>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Heading 3"
          active={isActive("heading", { level: 3 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        >
          <span className="text-xs font-black">H3</span>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Heading 4"
          active={isActive("heading", { level: 4 })}
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        >
          <span className="text-[10px] font-black">H4</span>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Paragraph"
          active={isActive("paragraph")}
          onClick={() => editor.chain().focus().setParagraph().run()}
        >
          <span className="text-xs font-black">¶</span>
        </ToolbarBtn>

        <Sep isLight={isLight} />

        {/* Inline styles */}
        <ToolbarBtn
          isLight={isLight}
          title="Bold (Ctrl+B)"
          active={isActive("bold")}
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <span className="font-black text-sm">B</span>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Italic (Ctrl+I)"
          active={isActive("italic")}
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <span className="italic font-bold text-sm">I</span>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Underline (Ctrl+U)"
          active={isActive("underline")}
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <span className="underline font-bold text-sm">U</span>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Strikethrough"
          active={isActive("strike")}
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <span className="line-through font-bold text-sm">S</span>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Code"
          active={isActive("code")}
          onClick={() => editor.chain().focus().toggleCode().run()}
        >
          <span className="font-mono text-xs">`c`</span>
        </ToolbarBtn>

        <Sep isLight={isLight} />

        {/* Highlight */}
        <ToolbarBtn
          isLight={isLight}
          title="Highlight (yellow)"
          active={isActive("highlight", { color: "#fef08a" })}
          onClick={() =>
            editor.chain().focus().toggleHighlight({ color: "#fef08a" }).run()
          }
        >
          <Icon title="Highlight yellow">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <rect x="2" y="9" width="12" height="4" rx="1" fill="#fef08a" />
              <path d="M5 9V4l3-2 3 2v5H5z" fill="currentColor" opacity="0.7" />
            </svg>
          </Icon>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Highlight (green)"
          active={isActive("highlight", { color: "#bbf7d0" })}
          onClick={() =>
            editor.chain().focus().toggleHighlight({ color: "#bbf7d0" }).run()
          }
        >
          <Icon title="Highlight green">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <rect x="2" y="9" width="12" height="4" rx="1" fill="#bbf7d0" />
              <path d="M5 9V4l3-2 3 2v5H5z" fill="currentColor" opacity="0.7" />
            </svg>
          </Icon>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Highlight (pink)"
          active={isActive("highlight", { color: "#fbcfe8" })}
          onClick={() =>
            editor.chain().focus().toggleHighlight({ color: "#fbcfe8" }).run()
          }
        >
          <Icon title="Highlight pink">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <rect x="2" y="9" width="12" height="4" rx="1" fill="#fbcfe8" />
              <path d="M5 9V4l3-2 3 2v5H5z" fill="currentColor" opacity="0.7" />
            </svg>
          </Icon>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Remove Highlight"
          active={false}
          onClick={() => editor.chain().focus().unsetHighlight().run()}
        >
          <Icon title="No highlight">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <rect x="2" y="9" width="12" height="4" rx="1" fill="currentColor" opacity="0.2" />
              <path d="M5 9V4l3-2 3 2v5H5z" fill="currentColor" opacity="0.5" />
              <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Icon>
        </ToolbarBtn>

        <Sep isLight={isLight} />

        {/* Lists */}
        <ToolbarBtn
          isLight={isLight}
          title="Bullet List"
          active={isActive("bulletList")}
          onClick={() => editor.chain().focus().toggleBulletList().run()}
        >
          <Icon title="Bullet list">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <circle cx="2.5" cy="4" r="1.2" fill="currentColor" />
              <circle cx="2.5" cy="8" r="1.2" fill="currentColor" />
              <circle cx="2.5" cy="12" r="1.2" fill="currentColor" />
              <rect x="5.5" y="3" width="9" height="2" rx="1" fill="currentColor" />
              <rect x="5.5" y="7" width="9" height="2" rx="1" fill="currentColor" />
              <rect x="5.5" y="11" width="9" height="2" rx="1" fill="currentColor" />
            </svg>
          </Icon>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Numbered List"
          active={isActive("orderedList")}
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
        >
          <Icon title="Ordered list">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <text x="0" y="5" fontSize="5" fill="currentColor" fontWeight="bold">1.</text>
              <text x="0" y="9.5" fontSize="5" fill="currentColor" fontWeight="bold">2.</text>
              <text x="0" y="14" fontSize="5" fill="currentColor" fontWeight="bold">3.</text>
              <rect x="5.5" y="3" width="9" height="2" rx="1" fill="currentColor" />
              <rect x="5.5" y="7.5" width="9" height="2" rx="1" fill="currentColor" />
              <rect x="5.5" y="12" width="9" height="2" rx="1" fill="currentColor" />
            </svg>
          </Icon>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Blockquote"
          active={isActive("blockquote")}
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
        >
          <Icon title="Blockquote">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <rect x="2" y="3" width="2.5" height="10" rx="1.25" fill="currentColor" opacity="0.5" />
              <text x="6" y="10" fontSize="11" fill="currentColor" fontWeight="bold">"</text>
            </svg>
          </Icon>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Code Block"
          active={isActive("codeBlock")}
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <Icon title="Code block">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <rect x="1" y="3" width="14" height="10" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <path d="M5 7L3 9l2 2M11 7l2 2-2 2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Icon>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Horizontal Rule"
          active={false}
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <Icon title="Divider">
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <line x1="1" y1="8" x2="15" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="1" y1="4" x2="7" y2="4" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
              <line x1="1" y1="12" x2="7" y2="12" stroke="currentColor" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
            </svg>
          </Icon>
        </ToolbarBtn>

        <Sep isLight={isLight} />

        {/* Text Align */}
        <ToolbarBtn
          isLight={isLight}
          title="Align Left"
          active={editor.isActive({ textAlign: "left" })}
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
        >
          <Icon>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <rect x="1" y="3" width="14" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="1" y="6.5" width="9" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="1" y="10" width="14" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="1" y="13.5" width="9" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
          </Icon>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Align Center"
          active={editor.isActive({ textAlign: "center" })}
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
        >
          <Icon>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <rect x="1" y="3" width="14" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="3.5" y="6.5" width="9" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="1" y="10" width="14" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="3.5" y="13.5" width="9" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
          </Icon>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Align Right"
          active={editor.isActive({ textAlign: "right" })}
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
        >
          <Icon>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <rect x="1" y="3" width="14" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="6" y="6.5" width="9" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="1" y="10" width="14" height="1.5" rx="0.75" fill="currentColor" />
              <rect x="6" y="13.5" width="9" height="1.5" rx="0.75" fill="currentColor" />
            </svg>
          </Icon>
        </ToolbarBtn>

        <Sep isLight={isLight} />

        {/* Link */}
        <ToolbarBtn
          isLight={isLight}
          title="Insert/Edit Link"
          active={isActive("link")}
          onClick={handleSetLink}
        >
          <Icon>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M6.5 9.5a3.5 3.5 0 005 0l2-2a3.5 3.5 0 00-5-4.95l-1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M9.5 6.5a3.5 3.5 0 00-5 0l-2 2a3.5 3.5 0 004.95 5l1-1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Icon>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Remove Link"
          active={false}
          disabled={!isActive("link")}
          onClick={() => editor.chain().focus().unsetLink().run()}
        >
          <Icon>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M6.5 9.5a3.5 3.5 0 005 0l2-2a3.5 3.5 0 00-5-4.95l-1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>
              <line x1="2" y1="2" x2="14" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </Icon>
        </ToolbarBtn>

        <Sep isLight={isLight} />

        {/* Image Upload */}
        <ToolbarBtn
          isLight={isLight}
          title="Insert Image"
          active={false}
          onClick={() => imageInputRef.current?.click()}
        >
          <Icon>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <rect x="1" y="2" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="5.5" cy="6" r="1.5" fill="currentColor" />
              <path d="M1 11l3.5-3.5L7 10l3-3.5L15 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Icon>
        </ToolbarBtn>

        <input
          ref={imageInputRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleImageUpload(file);
          }}
        />

        <Sep isLight={isLight} />

        {/* Undo / Redo */}
        <ToolbarBtn
          isLight={isLight}
          title="Undo (Ctrl+Z)"
          active={false}
          disabled={!editor.can().undo()}
          onClick={() => editor.chain().focus().undo().run()}
        >
          <Icon>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M2 6h7a4 4 0 010 8H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 3L2 6l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Icon>
        </ToolbarBtn>
        <ToolbarBtn
          isLight={isLight}
          title="Redo (Ctrl+Y)"
          active={false}
          disabled={!editor.can().redo()}
          onClick={() => editor.chain().focus().redo().run()}
        >
          <Icon>
            <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
              <path d="M14 6H7a4 4 0 000 8h4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M11 3l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Icon>
        </ToolbarBtn>
      </div>

      {/* ── Editor Content Area ── */}
      <EditorContent
        editor={editor}
        className={`blog-editor-content ${isLight ? "text-slate-900" : "text-slate-100"}`}
      />

      {/* ── Image Context Menu (Bubble Menu) ── */}
      {editor && (
        <BubbleMenu
          editor={editor}
          shouldShow={({ editor }: { editor: any }) => editor.isActive("image")}
        >
          <div
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl shadow-xl border ${
              isLight ? "bg-white border-slate-200" : "bg-slate-800 border-slate-700"
            }`}
          >
            <span className={`text-[10px] font-black uppercase tracking-wider mr-2 ${isLight ? "text-slate-400" : "text-slate-500"}`}>
              Image Options
            </span>
            <button
              onClick={() => {
                const currentAlt = editor.getAttributes("image").alt || "";
                const newAlt = window.prompt("Enter Alt Text for this image (Important for SEO):", currentAlt);
                if (newAlt !== null) {
                  editor.chain().focus().updateAttributes("image", { alt: newAlt }).run();
                }
              }}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                isLight
                  ? "bg-blue-50 text-blue-700 hover:bg-blue-100"
                  : "bg-blue-500/20 text-blue-400 hover:bg-blue-500/30"
              }`}
            >
              Add Alt Text
            </button>
            <button
              onClick={() => {
                if (window.confirm("Remove this image?")) {
                  editor.commands.deleteSelection();
                }
              }}
              className={`text-xs font-bold px-3 py-1.5 rounded-lg transition-colors ${
                isLight
                  ? "bg-red-50 text-red-700 hover:bg-red-100"
                  : "bg-red-500/20 text-red-400 hover:bg-red-500/30"
              }`}
            >
              Delete
            </button>
          </div>
        </BubbleMenu>
      )}

      {/* ── Status Bar ── */}
      <div
        className={`flex items-center justify-between px-4 py-2 border-t text-[10px] font-bold uppercase tracking-widest ${
          isLight ? "bg-slate-50 border-slate-200 text-slate-400" : "bg-slate-800 border-slate-700 text-slate-500"
        }`}
      >
        <span>
          {editor.storage?.characterCount?.characters?.() ?? "—"} chars
          {" · "}
          {editor.storage?.characterCount?.words?.() ?? "—"} words
        </span>
        <span>Rich Text Mode · HTML Output</span>
      </div>
    </div>
  );
}
