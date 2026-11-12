# bBash Starter Kits

**bKash Clone App in React Native (Expo) — বাংলা Full Course**

এই repo-তে course-এর প্রতিটা part-এর শেষে code যেমন থাকে, ঠিক তেমন আছে। Video দেখতে দেখতে আটকে গেলে, বা মাঝখান থেকে শুরু করতে চাইলে, ওই part-এর branch নিয়ে নিন।

- ▶ **পুরো playlist:** https://www.youtube.com/watch?v=bKl-W8o-OAk&list=PLe17jIbpkmaA
- 🎬 **Course-এর ভূমিকা (trailer):** https://www.youtube.com/watch?v=bKl-W8o-OAk
- 🌐 **আমার বাকি কাজ:** https://reactbd.com · YouTube [@reactbdbangla](https://www.youtube.com/@reactbdbangla)

## Branch কোনটা

প্রতিটা part একটা branch। `main`-এ সবসময় সর্বশেষ part-এর code।

| Branch                          | Part                                    | এই branch-এ যা আছে                                                                                                                                                                                    |
| ------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`part-01`](../../tree/part-01) | Part 1 · খালি folder থেকে প্রথম Expo app | Expo SDK 58 project (Expo Router, TypeScript), template reset, `app.json`-এ bBash-এর পরিচয়, NativeWind 4 + Tailwind CSS 3, Prettier + Tailwind plugin, ESLint, আর `className` দিয়ে গোলাপি প্রথম screen |

পরের part-গুলো আসার সাথে সাথে এখানে নতুন branch যোগ হবে।

## চালাতে যা লাগবে

- **Node.js** LTS (https://nodejs.org/en/download): `node -v` দিয়ে check করুন
- **Git**: `git --version`
- **VS Code** আর **Expo Tools** extension
- App চালানোর একটা জায়গা: Mac-এ iOS Simulator (Xcode), Windows/Linux-এ Android Studio emulator, browser, অথবা phone-এ **Expo Go** (SDK 58 চালাতে পারে এমন version)

## শুরু করুন

```bash
git clone https://github.com/noorjsdivs/bbash-starter-kits.git bbash-wallet
cd bbash-wallet
git checkout part-01
npm install
npx expo start
```

Terminal-এ `i` চাপলে iOS Simulator, `a` চাপলে Android emulator, `w` চাপলে browser। Phone-এ Expo Go দিয়ে QR code scan করুন।

## প্রতিটা part শেষে দুইটা check

```bash
npx tsc --noEmit   # TypeScript: কোন output নেই মানে কোন error নেই
npx expo lint      # ESLint: Expo-র নিয়মে
```

## `className` কাজ না করলে

NativeWind চারটা file-এর উপর দাঁড়িয়ে থাকে: `tailwind.config.ts`, `src/global.css`, `babel.config.js`, `metro.config.js`। Style না এলে তিনটা জিনিস দেখুন:

1. `src/app/_layout.tsx`-এর একদম উপরে `import '@/global.css';` আছে কিনা
2. `metro.config.js`-এ `withNativeWind(config, { input: './src/global.css' })`-এর path ঠিক আছে কিনা
3. `babel.config.js`-এ `jsxImportSource: 'nativewind'` আছে কিনা

তারপর cache মুছে আবার চালান: `npx expo start --clear`

## Stack

Expo SDK 58 · React Native 0.88 · React 19 · TypeScript 6 · Expo Router · NativeWind 4 · Tailwind CSS 3.4 · Prettier · ESLint (`eslint-config-expo`)

---

⚠️ bBash শেখার জন্য বানানো একটা clone। এটা bKash-এর official app না, আর bKash-এর সাথে এর কোন সম্পর্ক নেই। সব নাম, নম্বর আর লেনদেন dummy data; কোন আসল টাকা নেই।
