"use client";

import { useEditor, EditorContent, ReactRenderer } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import { useState, useEffect, useMemo } from "react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Underline from "@tiptap/extension-underline";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import TextAlign from "@tiptap/extension-text-align";
import Youtube from "@tiptap/extension-youtube";
import CharacterCount from "@tiptap/extension-character-count";
import tippy from 'tippy.js'

import { SlashCommands } from "./editor/SlashCommands";
import { SuggestionList } from "./editor/SuggestionList";

import { 
  Bold, Italic, Underline as UnderlineIcon, Heading2, Heading3,
  List, ListOrdered, Quote, Code, ImageIcon, Link2, Unlink,
  Table as TableIcon, AlignLeft, AlignCenter, AlignRight, Maximize, Minimize,
  Youtube as YoutubeIcon, Undo, Redo, Type, FileText, Clock, ChevronDown, ListTree
} from "lucide-react";

interface TipTapEditorProps {
  content: string;
  onChange: (value: string) => void;
  isFullscreen?: boolean;
  toggleFullscreen?: () => void;
  isSidebarOpen?: boolean;
  onEditorReady?: (editor: any) => void;
}

export const MenuBar = ({ editor, isFullscreen, toggleFullscreen, variant = "default" }: { 
  editor: any, 
  isFullscreen?: boolean, 
  toggleFullscreen?: () => void,
  variant?: "default" | "fullscreen"
}) => {
  if (!editor) return null;

  const isLarge = variant === "fullscreen";
  const iconSize = isLarge ? 20 : 14;

  const options = [
    { key: 'paragraph', label: 'Text' },
    { key: 'heading2', label: 'H2' },
    { key: 'heading3', label: 'H3' },
    { key: 'bulletList', label: 'List' },
    { key: 'orderedList', label: 'Ordered' },
    { key: 'blockquote', label: 'Quote' }
  ];

  const Button = ({ onClick, isActive, children, disabled, title, className = "" }: { 
    onClick: () => void, 
    isActive?: boolean, 
    children: React.ReactNode, 
    disabled?: boolean, 
    title?: string,
    className?: string
  }) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`rounded-xl transition-all duration-300 flex items-center justify-center ${isLarge ? "p-3 min-w-[44px]" : "p-1.5 min-w-[28px]"} ${
        isActive 
          ? "bg-slate-900 text-white shadow-xl scale-110" 
          : "text-slate-400 hover:bg-slate-100 hover:text-slate-900"
      } ${disabled ? "opacity-30 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );

  const BlockSelector = () => {
    const activeKey = editor.isActive('heading', { level: 2 }) ? 'heading2' :
                      editor.isActive('heading', { level: 3 }) ? 'heading3' :
                      editor.isActive('bulletList') ? 'bulletList' :
                      editor.isActive('orderedList') ? 'orderedList' :
                      editor.isActive('blockquote') ? 'blockquote' : 'paragraph';

    return (
      <div className="relative group/block px-2">
        <button 
          type="button"
          className={`flex items-center gap-2 rounded-xl hover:bg-slate-100 transition-all text-slate-500 hover:text-slate-900 ${isLarge ? 'px-4 py-2.5' : 'px-3 py-1.5'}`}
        >
          <span className={`${isLarge ? 'text-[11px]' : 'text-[10px]'} font-black uppercase tracking-widest min-w-[70px] text-center`}>
            {options.find(opt => opt.key === activeKey)?.label || 'Text'}
          </span>
          <ChevronDown size={isLarge ? 14 : 12} className="opacity-40" />
        </button>
        <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-200 shadow-2xl rounded-2xl py-2 opacity-0 invisible group-hover/block:opacity-100 group-hover/block:visible transition-all z-50">
            <button onClick={() => editor.chain().focus().setParagraph().run()} className="w-full flex items-center gap-4 px-5 py-3 hover:bg-slate-50 text-[11px] font-bold text-slate-600">
             <Type size={16} className="opacity-40" /> Paragraph
            </button>
            <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="w-full flex items-center gap-4 px-5 py-3 hover:bg-slate-50 text-[11px] font-bold text-slate-600">
             <Heading2 size={16} className="opacity-40" /> Heading 2
            </button>
            <button onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className="w-full flex items-center gap-4 px-5 py-3 hover:bg-slate-50 text-[11px] font-bold text-slate-600">
             <Heading3 size={16} className="opacity-40" /> Heading 3
            </button>
            <div className="h-[1px] bg-slate-100 my-1 mx-3"></div>
            <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="w-full flex items-center gap-4 px-5 py-3 hover:bg-slate-50 text-[11px] font-bold text-slate-600">
             <List size={16} className="opacity-40" /> Bullet List
            </button>
            <button onClick={() => editor.chain().focus().toggleBlockquote().run()} className="w-full flex items-center gap-4 px-5 py-3 hover:bg-slate-50 text-[11px] font-bold text-slate-600">
             <Quote size={16} className="opacity-40" /> Blockquote
            </button>
        </div>
      </div>
    );
  };

  return (
    <div className={`flex flex-nowrap items-center bg-transparent ${isLarge ? 'gap-2' : 'gap-0.5'}`}>
      {/* History */}
      <div className={`flex items-center border-r border-slate-100/50 ${isLarge ? 'gap-1 pr-3' : 'gap-0.5 pr-2'}`}>
        <Button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo">
          <Undo size={iconSize} />
        </Button>
        <Button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo">
          <Redo size={iconSize} />
        </Button>
      </div>

      <BlockSelector />

      <div className={`flex items-center border-x border-slate-100/50 ${isLarge ? 'gap-1 px-3 ml-2' : 'gap-0.5 px-1'}`}>
        <Button onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive("bold")} title="Bold">
          <Bold size={iconSize} strokeWidth={3} />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive("italic")} title="Italic">
          <Italic size={iconSize} strokeWidth={3} />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive("underline")} title="Underline">
          <UnderlineIcon size={iconSize} strokeWidth={3} />
        </Button>
      </div>

      <div className={`flex items-center ${isLarge ? 'gap-2 px-3' : 'gap-0.5 px-1'}`}>
        <Button onClick={() => {
           const url = window.prompt('URL');
           if (url) editor.chain().focus().setLink({ href: url }).run();
           else if (url === '') editor.chain().focus().unsetLink().run();
        }} isActive={editor.isActive("link")} title="Link">
          <Link2 size={iconSize} />
        </Button>
        <Button onClick={() => {
           const url = window.prompt("Image URL:");
           if (url) editor.chain().focus().setImage({ src: url }).run();
        }} title="Image">
          <ImageIcon size={iconSize} />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleCode().run()} isActive={editor.isActive("code")} title="Code">
          <Code size={iconSize} />
        </Button>
        <Button onClick={() => {
          const url = window.prompt("YouTube URL:");
          if (url) editor.commands.setYoutubeVideo({ src: url });
        }} title="YouTube">
          <YoutubeIcon size={iconSize} />
        </Button>
        <Button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} title="Table">
          <TableIcon size={iconSize} />
        </Button>
      </div>

      <div className={`flex items-center border-l border-slate-100/50 ${isLarge ? 'gap-1 px-3 ml-2' : 'gap-0.5 px-1'}`}>
        <Button onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} title="Align Left">
          <AlignLeft size={iconSize} />
        </Button>
        <Button onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} title="Align Center">
          <AlignCenter size={iconSize} />
        </Button>
        <Button onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} title="Align Right">
          <AlignRight size={iconSize} />
        </Button>
      </div>

      <div className="flex items-center gap-1 pl-4 ml-auto">
        {toggleFullscreen && (
          <button 
            onClick={toggleFullscreen}
            className={`flex items-center gap-3 px-6 py-2.5 rounded-2xl bg-slate-50 text-slate-500 hover:bg-slate-100 transition-all font-black uppercase tracking-widest ${isLarge ? 'text-[11px]' : 'hidden'}`}
          >
            <Minimize size={18} />
            Minimize
          </button>
        )}
      </div>

      {/* Table Management (Inside MenuBar island for cleaner UI) */}
      {editor.isActive('table') && (
        <div className={`absolute top-full left-0 right-0 mt-3 flex items-center justify-center p-2 bg-white/90 backdrop-blur-xl border border-slate-200/50 shadow-2xl rounded-2xl animate-in slide-in-from-top-4 duration-300 ${isLarge ? 'gap-3' : 'gap-1'}`}>
          <span className="text-[9px] font-black uppercase text-slate-400 px-3">Table Tools:</span>
          <button onClick={() => editor.chain().focus().addColumnAfter().run()} className="text-[10px] font-bold text-slate-600 hover:text-slate-900 bg-slate-50 px-3 py-1.5 rounded-xl hover:bg-slate-100 transition-all">Add Column</button>
          <button onClick={() => editor.chain().focus().addRowAfter().run()} className="text-[10px] font-bold text-slate-600 hover:text-slate-900 bg-slate-50 px-3 py-1.5 rounded-xl hover:bg-slate-100 transition-all">Add Row</button>
          <button onClick={() => editor.chain().focus().deleteTable().run()} className="text-[10px] font-bold text-red-500 bg-red-50/50 px-4 py-1.5 rounded-xl hover:bg-red-50 transition-all ml-4">Delete Table</button>
        </div>
      )}
    </div>
  );
};

export default function TipTapEditor({ content, onChange, isFullscreen, toggleFullscreen, isSidebarOpen, onEditorReady }: TipTapEditorProps) {
  const extensions = useMemo(() => [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({ openOnClick: false }),
      Image,
      Youtube,
      CharacterCount,
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      SlashCommands.configure({
        suggestion: {
          items: ({ query }: { query: string }) => {
            return [
              {
                title: 'Heading 2',
                icon: <Heading2 size={14} />,
                command: ({ editor, range }: any) => {
                  editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run()
                },
              },
              {
                title: 'Heading 3',
                icon: <Heading3 size={14} />,
                command: ({ editor, range }: any) => {
                  editor.chain().focus().deleteRange(range).setNode('heading', { level: 3 }).run()
                },
              },
              {
                title: 'Bullet List',
                icon: <List size={14} />,
                command: ({ editor, range }: any) => {
                  editor.chain().focus().deleteRange(range).toggleBulletList().run()
                },
              },
              {
                title: 'Numbered List',
                icon: <ListOrdered size={14} />,
                command: ({ editor, range }: any) => {
                  editor.chain().focus().deleteRange(range).toggleOrderedList().run()
                },
              },
              {
                title: 'Blockquote',
                icon: <Quote size={14} />,
                command: ({ editor, range }: any) => {
                  editor.chain().focus().deleteRange(range).toggleBlockquote().run()
                },
              },
              {
                title: 'Code Block',
                icon: <Code size={14} />,
                command: ({ editor, range }: any) => {
                  editor.chain().focus().deleteRange(range).toggleCodeBlock().run()
                },
              },
              {
                title: 'YouTube Video',
                icon: <YoutubeIcon size={14} />,
                command: ({ editor, range }: any) => {
                  const url = window.prompt('YouTube URL')
                  if (url) {
                    editor.chain().focus().deleteRange(range).setYoutubeVideo({ src: url }).run()
                  }
                },
              },
              {
                title: 'Table',
                icon: <TableIcon size={14} />,
                command: ({ editor, range }: any) => {
                  editor.chain().focus().deleteRange(range).insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()
                },
              },
            ].filter(item => item.title.toLowerCase().startsWith(query.toLowerCase()))
          },
          render: () => {
            let component: any
            let popup: any

            return {
              onStart: (props: any) => {
                component = new ReactRenderer(SuggestionList, {
                  props,
                  editor: props.editor,
                })

                if (!props.clientRect) {
                  return
                }

                popup = tippy('body', {
                  getReferenceClientRect: props.clientRect,
                  appendTo: () => document.body,
                  content: component.element,
                  showOnCreate: true,
                  interactive: true,
                  trigger: 'manual',
                  placement: 'bottom-start',
                })
              },

              onUpdate(props: any) {
                component.updateProps(props)

                if (!props.clientRect) {
                  return
                }

                popup[0].setProps({
                  getReferenceClientRect: props.clientRect,
                })
              },

              onKeyDown(props: any) {
                if (props.event.key === 'Escape') {
                  popup[0].hide()
                  return true
                }
                return component.ref?.onKeyDown(props)
              },

              onExit() {
                popup[0].destroy()
                component.destroy()
              },
            }
          },
        },
      }),
  ], []);

  const editor = useEditor({
    extensions,
    content: content,
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: `prose prose-slate max-w-none focus:outline-none text-slate-800 leading-relaxed prose-p:text-lg prose-p:leading-8 prose-p:text-slate-600 prose-headings:font-black prose-headings:tracking-tight prose-headings:text-slate-900 prose-h1:text-5xl prose-h1:mb-10 prose-h2:text-4xl prose-h2:mt-16 prose-h2:mb-8 prose-h3:text-3xl prose-h3:mt-12 prose-h3:mb-6 prose-h4:text-2xl prose-h4:mt-8 prose-h4:mb-4 prose-a:text-blue-600 prose-img:rounded-[2rem] prose-img:shadow-2xl prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-slate-700 ${isFullscreen ? "min-h-[80vh]" : "min-h-[500px]"}`.replace(/\s+/g, ' '),
      },
    },
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
  });

  useEffect(() => {
    if (editor && onEditorReady) {
      onEditorReady(editor);
    }
  }, [editor, onEditorReady]);

  if (!editor) return null;

  const wordCount = editor.storage?.characterCount?.words?.() || 0;
  const readingTime = Math.ceil(wordCount / 200);

  return (
    <div className={`flex flex-col bg-white overflow-hidden transition-all ${isFullscreen ? "fixed inset-0 z-[100] bg-slate-50/50 backdrop-blur-3xl" : ""}`}>
      {/* Centered Floating Toolbar (Fullscreen ONLY) */}
      {isFullscreen && (
         <div className="fixed top-12 left-1/2 -translate-x-1/2 z-[110] bg-white border border-slate-200 shadow-[0_30px_100px_-20px_rgba(0,0,0,0.15)] rounded-[2rem] p-2 animate-in slide-in-from-top-8 duration-500 glass-effect">
            <MenuBar editor={editor} isFullscreen={isFullscreen} toggleFullscreen={toggleFullscreen} variant="fullscreen" />
         </div>
      )}
      
      {editor && (
        <BubbleMenu editor={editor} options={{ placement: 'top' }}>
          <div className="flex items-center bg-white border border-slate-200 shadow-2xl overflow-hidden rounded-xl p-1 gap-0.5 animate-in fade-in zoom-in-95 duration-200">
            {/* Block Type Mini-Selector */}
            <div className="flex items-center border-r border-slate-100 pr-1 mr-1 gap-0.5">
              <button 
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
                className={`p-1.5 rounded-lg text-[10px] font-black transition-all ${editor.isActive('heading', { level: 1 }) ? 'bg-slate-900 text-white' : 'text-slate-400 hover:bg-slate-50'}`}
              >
                H1
              </button>
              <button 
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
                className={`p-1.5 rounded-lg text-[10px] font-black transition-all ${editor.isActive('heading', { level: 2 }) ? 'bg-slate-900 text-white' : 'text-slate-400 hover:bg-slate-50'}`}
              >
                H2
              </button>
              <button 
                type="button"
                onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
                className={`p-1.5 rounded-lg text-[10px] font-black transition-all ${editor.isActive('heading', { level: 3 }) ? 'bg-slate-900 text-white' : 'text-slate-400 hover:bg-slate-50'}`}
              >
                H3
              </button>
            </div>

            {/* Basic Formatting */}
            <div className="flex items-center border-r border-slate-100 pr-1 mr-1 gap-0.5">
              <button 
                type="button"
                onClick={() => editor.chain().focus().toggleBold().run()}
                className={`p-1.5 rounded-lg transition-all ${editor.isActive('bold') ? 'bg-slate-900 text-white outline-none font-bold' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Bold size={13} strokeWidth={3} />
              </button>
              <button 
                type="button"
                onClick={() => editor.chain().focus().toggleItalic().run()}
                className={`p-1.5 rounded-lg transition-all ${editor.isActive('italic') ? 'bg-slate-900 text-white outline-none' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Italic size={13} strokeWidth={3} />
              </button>
              <button 
                type="button"
                onClick={() => editor.chain().focus().toggleUnderline().run()}
                className={`p-1.5 rounded-lg transition-all ${editor.isActive('underline') ? 'bg-slate-900 text-white outline-none' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <UnderlineIcon size={13} strokeWidth={3} />
              </button>
            </div>

            {/* Links, Code & Lists */}
            <div className="flex items-center gap-0.5">
              <button 
                type="button"
                onClick={() => {
                  const previousUrl = editor.getAttributes('link').href;
                  const url = window.prompt('URL', previousUrl);
                  if (url) editor.chain().focus().setLink({ href: url }).run();
                  else if (url === '') editor.chain().focus().unsetLink().run();
                }}
                className={`p-1.5 rounded-lg transition-all ${editor.isActive('link') ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Link2 size={13} strokeWidth={3} />
              </button>
              <button 
                type="button"
                onClick={() => editor.chain().focus().toggleCode().run()}
                className={`p-1.5 rounded-lg transition-all ${editor.isActive('code') ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Code size={13} strokeWidth={3} />
              </button>
              <button 
                type="button"
                onClick={() => editor.chain().focus().toggleBulletList().run()}
                className={`p-1.5 rounded-lg transition-all ${editor.isActive('bulletList') ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <List size={13} strokeWidth={3} />
              </button>
              <button 
                type="button"
                onClick={() => editor.chain().focus().toggleBlockquote().run()}
                className={`p-1.5 rounded-lg transition-all ${editor.isActive('blockquote') ? 'bg-slate-900 text-white' : 'text-slate-500 hover:bg-slate-50'}`}
              >
                <Quote size={13} strokeWidth={3} />
              </button>
            </div>
          </div>
        </BubbleMenu>
      )}

      <div className={`overflow-y-auto cursor-text transition-all duration-700 custom-scrollbar flex-1 flex flex-col items-center ${isFullscreen ? "pt-40 pb-40 px-6 bg-transparent" : "py-4 bg-white"}`}>
        <div className={`transition-all duration-700 pb-40 ${isFullscreen ? "w-full max-w-4xl bg-white rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.05)] border border-slate-200/50 p-12 lg:p-24" : "w-full"}`}>
          <EditorContent editor={editor} />
        </div>
      </div>

      {/* WordPress-style Editor Footer */}
      <div className="flex items-center justify-between px-6 py-3 bg-slate-50 border-t border-slate-100 text-[10px] font-black text-slate-400 uppercase tracking-widest">
        <div className="flex items-center gap-6">
           <div className="flex items-center gap-2">
              <FileText size={12} className="text-slate-300" />
              <span>{wordCount} Words</span>
           </div>
           <div className="flex items-center gap-2">
              <Type size={12} className="text-slate-300" />
              <span>{editor.storage.characterCount.characters()} Characters</span>
           </div>
           <div className="flex items-center gap-2">
              <Clock size={12} className="text-slate-300" />
              <span>{readingTime} Min Read</span>
           </div>
        </div>
        <div className="flex items-center gap-2">
           <span className="text-blue-600/40">TopRank Editor Pro v5.0</span>
        </div>
      </div>
    </div>
  );
}

