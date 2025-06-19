# Skipify 🎵

**Skipify** is a lightweight Chrome extension that lets you set a custom time (in seconds) for when Spotify Web Player should automatically skip to the next track.


## 🧠 Why I Built This

I wanted to automate skipping at a set time without touching the player every time. Also a good way to work with Chrome extensions, web scripting, and real use-case behavior automation.

Main inspiration is from Ed Sheeran's "Give Me Love, I love that song but the duration is a whopping 8:46 for absolutely no reason (2nd part wasn't needed)

I always wanted to just cut off and go next... So shout out Mr Ed Sheeran.

---

## 🚀 How It Works

- Open Spotify Web Player in Chrome.
- Click the Skipify extension icon.
- Enter the number of seconds you want a track to play before skipping.
- Play your music — Skipify auto-skips tracks once your timer is hit.

---

## ⚙️ Tech Used

- HTML + CSS + JavaScript
- Chrome Extension APIs (`content_scripts`, `background`)
- Injected DOM monitoring on Spotify Web

---

## ✅ Features

- Simple popup UI to enter cutoff time.
- Injects into Spotify Web Player tab.
- Monitors playback and skips at the set time.
- Works in real time without needing Spotify API.

---

## 📦 Install (Dev Mode)

1. Open `chrome://extensions/`
2. Enable **Developer Mode**
3. Click **Load Unpacked**
4. Select the `Skipify/` folder
5. Open [Spotify Web Player](https://open.spotify.com/) and enjoy!

---

Built for personal learning & control over Spotify playback.
