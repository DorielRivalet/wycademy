import { browser } from '$app/environment';
import { writable } from 'svelte/store';

let soundValue = false;
let pushNotificationsValue = false;

if (browser) {
  const localStorageSoundValue = window.localStorage.getItem('__sound-enabled');
  soundValue = localStorageSoundValue ?
    localStorageSoundValue === 'true' :
    true;
  const localStoragePushNotificationsValue = window.localStorage.getItem('__push-notifications-enabled');
  pushNotificationsValue = localStoragePushNotificationsValue ?
  localStoragePushNotificationsValue === 'true' :
    true;
}
else{
  soundValue = true;
  pushNotificationsValue = true;
}

export const soundStore = writable(soundValue);
export const pushNotificationsStore = writable(pushNotificationsValue);

export function onNotificationToggle(e: { detail: { toggled: boolean; }; }){
  pushNotificationsStore.set(e.detail.toggled);
}

export function onSoundToggle(e: { detail: { toggled: boolean; }; }){
  soundStore.set(e.detail.toggled);
}