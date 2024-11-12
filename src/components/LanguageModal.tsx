import { useEffect, useState } from "react"


const LanguageModal = ( lang:any ) => {
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
      tabIndex="-1"
      inert={!visible ? '' : null}
      className={`${visible ? '' : 'hidden'} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-slate-500/20 flex justify-center items-center`}
    >
			<div className="relative p-4 w-full max-w-2xl max-h-full">
					<div className="relative bg-white rounded-xl shadow dark:bg-cardBackground">
							<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
									<h3 className="text-xl font-semibold text-gray-700 dark:text-gray-300">
											{userLanguage === "es" ? "Versión en español disponible" : "English Version Available"}
									</h3>
									<button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal" onClick={closeModal}>
											<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
													<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
											</svg>
											<span className="sr-only">
                        { userLanguage === "es" ? "Cerrar modal" : "Close modal" }
                      </span>
									</button>
							</div>
							<div className="p-4 md:p-5 space-y-4">
									<p className="text-base leading-relaxed text-gray-900/80 dark:text-gray-500">
                    { userLanguage === "es" ? "Parece que tu navegador tiene un idioma distinto al de la web. Hay una versión en español disponible." : "It looks like your browser language is different from this page's language. We have an English version available." }
									</p>
									<p className="text-base leading-relaxed text-gray-900/80 dark:text-gray-500">
                    { userLanguage === "es" ? "¿Te gustaría cambiar a la versión en español?" : "Would you like to switch to the version in your preferred language?" }
									</p>
							</div>
							<div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
									<button data-modal-hide="default-modal" type="button" className="text-white border-cyan-900/10 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-cyan-900/70 hover:bg-cyan-900 focus:ring-gray-600" onClick={switchPage}>
                    { userLanguage === "es" ? "Ok, ¡Vamos!" : "Ok, take me there!" }
                  </button>
									<button data-modal-hide="default-modal" type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none rounded-lg border  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700" onClick={closeModal}>
                    { userLanguage === "es" ? "¡No gracias! Me quedaré aquí." : "No, thanks! I'll stay here." }
                  </button>
							</div>
					</div>
			</div>
    </div>
  )
}

export default LanguageModal