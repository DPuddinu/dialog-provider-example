import { PropsWithChildren, createContext, useRef, useState } from 'react';

export type TContent = React.ReactNode | null;
type TDialogPayload = {
  content: TContent;
  title: string;
}
export type TDialogContext = {
  showModal: (payload: TDialogPayload) => void;
  close: () => void;
  setContent: (content: React.ReactNode) => void;
  setTitle: (title: string) => void;
};

export const DialogContext = createContext<TDialogContext | null>(null);

export const DialogProvider = ({children} : PropsWithChildren) => {
  const [content, setContent] = useState<TContent>(null);
  const [title, setTitle] = useState<string>('');
  const ref = useRef<HTMLDialogElement>(null);

  function showModal(payload: TDialogPayload){
    setTitle(payload.title);
    setContent(payload.content);
    ref.current?.showModal();
  }
  
  return (
    <DialogContext.Provider
      value={{
        setContent,
        setTitle,
        showModal,
        close: () => ref.current?.close()
      }}
    >
      <dialog ref={ref} id='dialog' className='modal'>
        <div className='modal-box'>
          <div className='flex items-start justify-between'>
            <h3 className='text-lg font-bold'>{title}</h3>
            <form method='dialog'>
              <button className='h-6 w-6 rounded-full text-center font-extrabold transition-colors hover:bg-base-300 text-sm'>
                <span>X</span>
              </button>
            </form>
          </div>
          <div className='modal-action block'>{content}</div>
        </div>
      </dialog>
      {children}
    </DialogContext.Provider>
  );
};
