// /// <reference types='@sveltejs/kit'/>
// import { build, files, version } from '$service-worker';
// import fetchEvent from './fetchEvent';
// import installEvent from './installEvent';
import { build, files, prerendered, version } from '$service-worker';
import { offlineFallback } from 'workbox-recipes';
import { precacheAndRoute } from 'workbox-precaching';
import { NetworkOnly } from 'workbox-strategies';
import { setDefaultHandler } from 'workbox-routing';

setDefaultHandler(new NetworkOnly());

const precache_list = [...build, ...files, ...prerendered].map((file) => ({
	url: file,
	revision: version,
}));

precacheAndRoute(precache_list); // this has to run early.
offlineFallback(); // ONE LINE OF CODE
