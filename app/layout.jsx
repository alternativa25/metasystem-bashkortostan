// app/layout.jsx

export const metadata = {
  title: 'Metasystem Bashkortostan',
  description: 'Официальный сайт проекта Метасистема в Башкортостане',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  );
}
