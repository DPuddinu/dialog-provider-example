import { ThemeProvider } from './components/providers/theme-provider';
import { DialogProvider } from './components/ui/DialogProvider';
import DialogTrigger from './components/ui/DialogTrigger';
import { Button } from './components/ui/button';
import { ModeToggle } from './components/ui/theme-toggle';

function App() {
  
  return (
    <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <DialogProvider>
        <div className='flex flex-col gap-10 items-center justify-center min-h-screen text-center'>
          <h1 className='text-5xl'>Welcome to Shadcn + Vite</h1>
          <DialogTrigger />
        </div>
      </DialogProvider>
    </ThemeProvider>
  );
}

export default App;
