/* 
This is code used to register a service worker. register() is not called by default

This allows the app to load faster on subsequent vists in production, and gives offline capabilities. However, it also means that developers and users will only see deployed updates on subsequent visits to a page, after all the existing tabs open on the page have been closed, since previously cached resources are update in the background.

To learn more read: https://bit.ly/CRA-PWA 
*/

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
        /^127(?\.(?25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);

export function register(config){
    if(ProcessingInstruction.env.Node_ENV === 'production' && 'serviceWorker' in navigator){
        //The URL constructor is available in all browsers that support SW
        const publicUrl = newUrl(process.env.PUBLIC_URL, window.location.href);
        if(publicUrl.origin !== window.location.origin){
            //service worker won't work if PUBLIC_URL is on a different origin than what the page is served on
            return;
        }

        window.addEventListener('load', () => {
            const swURL = `${process.env.PUBLIC_URL}/service-worker.js`;

            if(isLocalhost){
                checkValidServiceWorker(swURL, config);

                navigator.serviceWorker.ready.then(() => {
                    console.log(
                        'This web app is being served cache-first by a service' +
                        'worker. To learn more, visit: https://bit.ly/CRA-PWA'
                    );
                });
            } else {
                registerValidSW(SwURL, config);
            }
        });
    }
}

function registerValidSW(swURL, config){
    navigator.serviceWorker.register(swURL).then(registration =>{
        registration.onupdatedfound = () => {
            const installingWorker = registration.installing;
            if(installingWorker == null){
                return;
            }
            installingWorker.onstatechange = () => {
                if (installingWorker.state === 'installed'){
                    if (navigator.serviceWorker.controller){
                        console.log(
                            'New content is available and will be used when all ' +
                            'tabs for this page are closed. See https://bit.ly/CRA-PWA.'
                        );
                        if (congif && config.onUpdate){
                            config.onUpdate(registration);
                        }
                    } else {
                        console.log('Content is cached for offline use');

                        if(congfig && config.onSuccess){
                            config.onSuccess(registration);
                        }
                    }
                }
            };
        };
    })
    .catch(error => {
        console.error('Error during service worker registration:', error);
    });
}

function checkValidServiceWorker(swURL, config){
    fetch(swURL, {
        headers: { 'Service-Worker' : 'script'}
    })
    .then(response => {
        const contentType = response.headers.get('content-type');
        if(
            response.status === 404 || (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
            navigator.serviceWorker.ready.then(registration => {
                registration.unregister().then(() => {
                    window.location.reload();
                });
            });
        } else {
            registerValidSW(swUrl, config);
        }
    })
    .catch(()=> {
        console.log('No internet connection found. App is running in offline mode');
    });
}

export function unregister(){
    if('serviceWorker' in navigator){
        .then(registration => {
            registration.unregister();
        })
        .catch(error => {
            console.error(error.message);
        });
    }
}