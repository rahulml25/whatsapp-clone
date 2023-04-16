import { ipcRenderer } from 'electron';

export default function useIPC() {
  return ipcRenderer ?? null;
}
