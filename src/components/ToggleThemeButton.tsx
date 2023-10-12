// "use client" 를 작성해도,
// next-themes 라이브러리를 사용하여
// 테마를 전환하는 UI 가 서버 사이드 렌더링(SSR) 또는 정적 사이트 생성(SSG) 시에
// hydration mismatch 경고를 발생시킬 수 있습니다.

// 그 이유는 next-themes 라이브러리에서는 useTheme 훅을 사용하여, 테마를 가져오게 되는데,
// 이 훅은 클라이언트 전용 객체인 window 객체를 사용하고 있고,
// 서버에서는 useTheme 훅을 사용하여, 현재 테마를 가져올 수 없으며, 이 때문에 테마가 undefined 로 설정이 되기 때문이다.
// 이러한 이유로, 서버에서는 테마를 렌더링 할 수 없으므로,
// 클라이언트에서 마운트 된 후에만 테마 전환 UI 를 렌더링 할 수 있도록 해야 합니다.

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { FiSun, FiMoon } from "react-icons/fi";

const ToggleThemeButton = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = theme === "dark";

  const handleToggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  if (!mounted) return null;

  return (
    <button onClick={handleToggleTheme} data-theme={theme}>
      {isDark ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ToggleThemeButton;

/*
Warning! The above code is hydration unsafe and will throw a hydration mismatch warning when rendering with SSG or SSR. This is because we cannot know the theme on the server, so it will always be undefined until mounted on the client.
You should delay rendering any theme toggling UI until mounted on the client. See the example.

만약 useEffect 없이 위의 next-themes 라이브러리를 사용하여 테마를 전환하는 UI 가 서버 사이드 렌더링(SSR) 또는 정적 사이트 생성(SSG) 시에
hydration mismatch 경고를 발생시킬 수 있습니다.

서버 사이드 렌더링을 사용하는 경우, 서버에서는 클라이언트와 달리 브라우저 (window) 객체가 없기 때문에 
브라우저에서 사용하는 window 객체와 같은 클라이언트 전용 객체에 접근 할 수가 없습니다
그런데 next-themes 라이브러리에서는 useTheme 훅을 사용하여, 테마를 가져오게 되는데,
이 훅은 클라이언트 전용 객체인 window 객체를 사용하고 있고,
서버에서는 useTheme 훅을 사용하여, 현재 테마를 가져올 수 없으며, 이 때문에 테마가 undefined 로 설정이 되기 때문이다.
이러한 이유로, 서버에서는 테마를 렌더링 할 수 없으므로,
클라이언트에서 마운트 된 후에만 테마 전환 UI 를 렌더링 할 수 있도록 해야 합니다.

따라서, 이러한 경고 메시지를 해결하기 위해서는 테마 전환 UI를 클라이언트에서 마운트된 후에만 렌더링하도록 코드를 수정해야 합니다. 
이를 위해 useEffect 훅을 사용하여 클라이언트에서만 실행되도록 코드를 작성할 수 있습니다.

자세한 내용 참조 : https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
 */
