import { useDialog } from '@/hooks/useDialog';

const DummyContent = () => {
  return (
    <div className='p-4'>
      <h1 className='text-2xl font-bold'>Hello World</h1>
    </div>
  );
};

const DialogTrigger = () => {
  const { showModal } = useDialog();

  return (
    <button
      className='btn'
      onClick={() => {
        showModal({
          content: <DummyContent />,
          title: 'Hello World'
        });
      }}
    >
      Open
    </button>
  );
};

export default DialogTrigger;
