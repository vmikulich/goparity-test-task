import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export function useToast() {
  const defaultSettings = {
    autoClose: 1000,
    position: 'top-center',
    theme: 'colored',
  }

  const errorToast = (message) => {
    toast.error(message, defaultSettings)
  }

  return { errorToast }
}
