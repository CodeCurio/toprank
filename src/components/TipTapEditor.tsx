"use client";

import { useEditor, EditorContent, ReactRenderer } from "@tiptap/react";
import { BubbleMenu } from "@tiptap/react/menus";
import { useState, useEffect, useMemo, useRef } from "react";
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
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import { Highlight } from "@tiptap/extension-highlight";
import { TaskItem } from "@tiptap/extension-task-item";
import { TaskList } from "@tiptap/extension-task-list";
import { FontFamily } from "@tiptap/extension-font-family";
import tippy from 'tippy.js';

import { SlashCommands } from "./editor/SlashCommands";
import { SuggestionList } from "./editor/SuggestionList";

import { 
  Bold, Italic, Underline as UnderlineIcon, Heading1, Heading2, Heading3,
  List, ListOrdered, Quote, Code, ImageIcon, Link2, Unlink,
  Table as TableIcon, AlignLeft, AlignCenter, AlignRight, AlignJustify,
  Youtube as YoutubeIcon, Undo, Redo, Type, FileText, Clock, ChevronDown, 
  CheckSquare, Strikethrough, Highlighter, Baseline, Eraser, Printer, Scissors, Copy, Clipboard
} from "lucide-react";

interface TipTapEditorProps {
  content: string;
  onChange: (value: string) => void;
  onEditorReady?: (editor: any) => void;
}

// Google Docs Style Menu Bar
export const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) return null;

  const Button = ({ onClick, isActive, children, disabled, title, className = "" }: any) => (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      title={title}
      className={`rounded-sm flex items-center justify-center p-1.5 transition-colors ${
        isActive 
          ? "bg-[#e8f0fe] text-[#1a73e8]" 
          : "text-[#444746] hover:bg-[#f0f4f9]"
      } ${disabled ? "opacity-30 cursor-not-allowed" : ""} ${className}`}
    >
      {children}
    </button>
  );

  const Divider = () => <div className="w-[1px] h-5 bg-[#c7c7c7] mx-1.5" />;

  // Block/Text Type Selector
  const BlockSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const activeKey = editor.isActive('heading', { level: 1 }) ? 'Title' :
                      editor.isActive('heading', { level: 2 }) ? 'Heading 1' :
                      editor.isActive('heading', { level: 3 }) ? 'Heading 2' :
                      editor.isActive('heading', { level: 4 }) ? 'Heading 3' : 'Normal text';

    return (
      <div className="relative">
        <button 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="flex items-center justify-between gap-2 px-2 py-1 rounded-sm hover:bg-[#f0f4f9] text-[#444746] text-[13px] font-medium min-w-[110px]"
        >
          <span className="truncate">{activeKey}</span>
          <ChevronDown size={14} className="opacity-70" />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-[#c7c7c7] shadow-lg rounded-sm py-1 z-50">
             <button onMouseDown={() => editor.chain().focus().setParagraph().run()} className={`w-full text-left px-4 py-2 text-[13px] hover:bg-[#f0f4f9] ${activeKey === 'Normal text' ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#444746]'}`}>Normal text</button>
             <button onMouseDown={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className={`w-full text-left px-4 py-2 text-[20px] font-medium hover:bg-[#f0f4f9] ${activeKey === 'Title' ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#444746]'}`}>Title</button>
             <button onMouseDown={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className={`w-full text-left px-4 py-2 text-[16px] font-medium hover:bg-[#f0f4f9] ${activeKey === 'Heading 1' ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#444746]'}`}>Heading 1</button>
             <button onMouseDown={() => editor.chain().focus().toggleHeading({ level: 3 }).run()} className={`w-full text-left px-4 py-2 text-[14px] font-medium hover:bg-[#f0f4f9] ${activeKey === 'Heading 2' ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#444746]'}`}>Heading 2</button>
             <button onMouseDown={() => editor.chain().focus().toggleHeading({ level: 4 }).run()} className={`w-full text-left px-4 py-2 text-[13px] font-medium hover:bg-[#f0f4f9] ${activeKey === 'Heading 3' ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#444746]'}`}>Heading 3</button>
          </div>
        )}
      </div>
    );
  };

  // Font Family Selector
  const FontSelector = () => {
    const [isOpen, setIsOpen] = useState(false);
    const fonts = ['Arial', 'Inter', 'Comic Sans MS', 'Courier New', 'Georgia', 'Times New Roman', 'Trebuchet MS', 'Verdana'];
    const activeFont = editor.getAttributes('textStyle').fontFamily || 'Arial';

    return (
      <div className="relative">
        <button 
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          className="flex items-center justify-between gap-2 px-2 py-1 rounded-sm hover:bg-[#f0f4f9] text-[#444746] text-[13px] font-medium min-w-[120px]"
        >
          <span className="truncate">{activeFont}</span>
          <ChevronDown size={14} className="opacity-70" />
        </button>
        {isOpen && (
          <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-[#c7c7c7] shadow-lg rounded-sm py-1 z-50 max-h-64 overflow-y-auto">
             {fonts.map(font => (
               <button 
                 key={font}
                 onMouseDown={() => editor.chain().focus().setFontFamily(font).run()} 
                 className={`w-full text-left px-4 py-2 text-[13px] hover:bg-[#f0f4f9] ${activeFont === font ? 'bg-[#e8f0fe] text-[#1a73e8]' : 'text-[#444746]'}`}
                 style={{ fontFamily: font }}
               >
                 {font}
               </button>
             ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex flex-wrap items-center bg-[#edf2fa] px-4 py-1.5 gap-y-1 w-full rounded-full mx-4 shadow-sm border border-transparent">
      
      {/* Undo/Redo/Print */}
      <div className="flex items-center">
        <Button onClick={() => editor.chain().focus().undo().run()} disabled={!editor.can().undo()} title="Undo (Ctrl+Z)">
          <Undo size={16} />
        </Button>
        <Button onClick={() => editor.chain().focus().redo().run()} disabled={!editor.can().redo()} title="Redo (Ctrl+Y)">
          <Redo size={16} />
        </Button>
        <Button onClick={() => window.print()} title="Print (Ctrl+P)">
          <Printer size={16} />
        </Button>
      </div>

      <Divider />

      {/* Block Styles */}
      <BlockSelector />
      <Divider />
      <FontSelector />
      
      <Divider />

      {/* Text Formatting */}
      <div className="flex items-center">
        <Button onClick={() => editor.chain().focus().toggleBold().run()} isActive={editor.isActive("bold")} title="Bold (Ctrl+B)">
          <Bold size={16} strokeWidth={2.5} />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleItalic().run()} isActive={editor.isActive("italic")} title="Italic (Ctrl+I)">
          <Italic size={16} />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleUnderline().run()} isActive={editor.isActive("underline")} title="Underline (Ctrl+U)">
          <UnderlineIcon size={16} />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleStrike().run()} isActive={editor.isActive("strike")} title="Strikethrough">
          <Strikethrough size={16} />
        </Button>
      </div>

      <Divider />

      {/* Colors */}
      <div className="flex items-center">
        <div className="relative group/color">
          <Button title="Text color">
            <Baseline size={16} className="text-[#444746]" style={{ color: editor.getAttributes('textStyle').color || '#000000' }} />
          </Button>
          <input 
            type="color" 
            onInput={(e: any) => editor.chain().focus().setColor(e.target.value).run()}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            title="Text color"
          />
        </div>
        <div className="relative group/highlight">
          <Button title="Highlight color">
            <Highlighter size={16} className="text-[#444746]" />
          </Button>
          <input 
            type="color" 
            onInput={(e: any) => editor.chain().focus().toggleHighlight({ color: e.target.value }).run()}
            className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
            title="Highlight color"
          />
        </div>
        <Button onClick={() => editor.chain().focus().unsetAllMarks().run()} title="Clear formatting">
          <Eraser size={16} />
        </Button>
      </div>

      <Divider />

      {/* Insert */}
      <div className="flex items-center">
        <Button onClick={() => {
           const url = window.prompt('URL');
           if (url) editor.chain().focus().setLink({ href: url }).run();
           else if (url === '') editor.chain().focus().unsetLink().run();
        }} isActive={editor.isActive("link")} title="Insert link (Ctrl+K)">
          <Link2 size={16} />
        </Button>
        <Button onClick={() => {
           const url = window.prompt("Image URL:");
           if (url) editor.chain().focus().setImage({ src: url }).run();
        }} title="Insert image">
          <ImageIcon size={16} />
        </Button>
        <Button onClick={() => editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()} title="Insert table">
          <TableIcon size={16} />
        </Button>
        <Button onClick={() => {
          const url = window.prompt("YouTube URL:");
          if (url) editor.commands.setYoutubeVideo({ src: url });
        }} title="Insert YouTube video">
          <YoutubeIcon size={16} />
        </Button>
      </div>

      <Divider />

      {/* Alignment */}
      <div className="flex items-center">
        <Button onClick={() => editor.chain().focus().setTextAlign('left').run()} isActive={editor.isActive({ textAlign: 'left' })} title="Left align">
          <AlignLeft size={16} />
        </Button>
        <Button onClick={() => editor.chain().focus().setTextAlign('center').run()} isActive={editor.isActive({ textAlign: 'center' })} title="Center align">
          <AlignCenter size={16} />
        </Button>
        <Button onClick={() => editor.chain().focus().setTextAlign('right').run()} isActive={editor.isActive({ textAlign: 'right' })} title="Right align">
          <AlignRight size={16} />
        </Button>
        <Button onClick={() => editor.chain().focus().setTextAlign('justify').run()} isActive={editor.isActive({ textAlign: 'justify' })} title="Justify">
          <AlignJustify size={16} />
        </Button>
      </div>

      <Divider />

      {/* Lists & Indent */}
      <div className="flex items-center">
        <Button onClick={() => editor.chain().focus().toggleTaskList().run()} isActive={editor.isActive("taskList")} title="Checklist">
          <CheckSquare size={16} />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleBulletList().run()} isActive={editor.isActive("bulletList")} title="Bulleted list">
          <List size={16} />
        </Button>
        <Button onClick={() => editor.chain().focus().toggleOrderedList().run()} isActive={editor.isActive("orderedList")} title="Numbered list">
          <ListOrdered size={16} />
        </Button>
      </div>
    </div>
  );
};

export default function TipTapEditor({ content, onChange, onEditorReady }: TipTapEditorProps) {
  const extensions = useMemo(() => [
      StarterKit.configure({
        bulletList: { keepMarks: true, keepAttributes: false },
        orderedList: { keepMarks: true, keepAttributes: false },
      }),
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      Link.configure({ openOnClick: false }),
      Image.configure({ inline: true }),
      Youtube,
      CharacterCount,
      Color,
      TextStyle,
      FontFamily.configure({
        types: ['textStyle'],
      }),
      Highlight.configure({ multicolor: true }),
      TaskList,
      TaskItem.configure({ nested: true }),
      Table.configure({ resizable: true }),
      TableRow,
      TableHeader,
      TableCell,
      SlashCommands.configure({
        suggestion: {
          items: ({ query }: { query: string }) => {
            return [
              {
                title: 'Heading 1',
                icon: <Heading1 size={14} />,
                command: ({ editor, range }: any) => {
                  editor.chain().focus().deleteRange(range).setNode('heading', { level: 1 }).run()
                },
              },
              {
                title: 'Heading 2',
                icon: <Heading2 size={14} />,
                command: ({ editor, range }: any) => {
                  editor.chain().focus().deleteRange(range).setNode('heading', { level: 2 }).run()
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
                title: 'Checklist',
                icon: <CheckSquare size={14} />,
                command: ({ editor, range }: any) => {
                  editor.chain().focus().deleteRange(range).toggleTaskList().run()
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
        // Essential Prose styling. We override some defaults to look more like Google Docs.
        class: `prose max-w-none focus:outline-none min-h-[800px] w-full text-[11pt] text-[#000000] leading-normal font-sans
          prose-p:my-0 prose-p:leading-[1.5]
          prose-headings:text-[#000000] prose-headings:font-normal prose-headings:my-2
          prose-h1:text-[26pt] prose-h1:mt-6 prose-h1:mb-4
          prose-h2:text-[20pt] prose-h2:mt-5 prose-h2:mb-3
          prose-h3:text-[16pt] prose-h3:mt-4 prose-h3:mb-2
          prose-h4:text-[14pt]
          prose-a:text-[#1155cc] prose-a:underline
          prose-img:max-w-full prose-img:m-0
          prose-ul:my-1 prose-ul:pl-8
          prose-ol:my-1 prose-ol:pl-8
          prose-li:my-0.5
          prose-blockquote:border-l-[3px] prose-blockquote:border-[#c7c7c7] prose-blockquote:pl-4 prose-blockquote:text-[#666666] prose-blockquote:my-2
          [&_ul[data-type="taskList"]]:list-none [&_ul[data-type="taskList"]]:pl-0
          [&_li[data-type="taskItem"]]:flex [&_li[data-type="taskItem"]]:gap-2 [&_li[data-type="taskItem"]>label]:mt-1
        `.replace(/\s+/g, ' '),
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

  return (
    <div className="w-full">
      <EditorContent editor={editor} />
      
      {/* Table Management (Floats below active table) */}
      {editor.isActive('table') && (
        <div className="absolute mt-2 flex items-center p-1 bg-white border border-[#c7c7c7] shadow-lg rounded-sm gap-1 z-10">
          <button onClick={() => editor.chain().focus().addColumnAfter().run()} className="text-[12px] text-[#444746] hover:bg-[#f0f4f9] px-2 py-1 rounded-sm">Add Col</button>
          <button onClick={() => editor.chain().focus().addRowAfter().run()} className="text-[12px] text-[#444746] hover:bg-[#f0f4f9] px-2 py-1 rounded-sm">Add Row</button>
          <div className="w-[1px] h-3 bg-[#c7c7c7] mx-1"></div>
          <button onClick={() => editor.chain().focus().deleteTable().run()} className="text-[12px] text-red-600 hover:bg-red-50 px-2 py-1 rounded-sm">Delete Table</button>
        </div>
      )}
    </div>
  );
}
