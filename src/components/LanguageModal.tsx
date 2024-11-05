import { useEffect, useState } from "preact/hooks"

const LanguageModal = ( lang ) => {
  const [visible, setVisible] = useState(false)
  const [userLanguage, setUserLanguage] = useState('')

  useEffect(() => {
    const navigatorUserLanguage = navigator.language.split('-')[0]
    setUserLanguage(navigatorUserLanguage)

    if (lang.lang !== navigatorUserLanguage) {
      setVisible(true)
    }
  }, [])

  const closeModal = () => {
    setVisible(false)
  }

  const switchPage = () => {
    window.location.href = (userLanguage === "es" ? '/' : '/en')
  }

  return (
    <div
      tabindex="-1"
      inert={!visible ? '' : null}
      className={`${visible ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-slate-500/20 flex justify-center items-center`}
    >
			<div className="relative p-4 w-full max-w-2xl max-h-full">
					<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
							<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
									<h3 className="text-xl font-semibold text-gray-900 dark:text-white">
											{userLanguage === "en" ? "English Version Available" : "Versión en español disponible"}
									</h3>
									<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={closeModal}>
											<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
													<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
											</svg>
											<span className="sr-only">
                        { userLanguage === "en" ? "Close modal" : "Cerrar modal" }
                      </span>
									</button>
							</div>
							<div className="p-4 md:p-5 space-y-4">
									<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    { userLanguage === "en" ? "It looks like your browser language is different from this page's language. We have an English version available." : "Parece que tu navegador tiene un idioma distinto al de la web. Hay una versión en español disponible." }
									</p>
									<p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                    { userLanguage === "en" ? "Would you like to switch to the version in your preferred language?" : "¿Te gustaría cambiar a la versión en español?" }
									</p>
							</div>
							<div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
									<button data-modal-hide="default-modal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={switchPage}>
                    { userLanguage === "en" ? "Ok, take me there!" : "Ok, ¡Vamos!" }
                  </button>
									<button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={closeModal}>
                    { userLanguage === "en" ? "No, thanks! I'll stay here." : "¡No gracias! Me quedaré aquí." }
                  </button>
							</div>
					</div>
			</div>
    </div>
  )
}

export default LanguageModal