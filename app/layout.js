import Provider from '@/components/Provider';
import './globals.css'
import { Inter, Fasthand, Alegreya_Sans_SC } from 'next/font/google'

//Fonts added here.............
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const fasthand = Fasthand({
  subsets: ['latin'],
  weight: '400',
  display: 'swap',
  variable: '--font-fasthand',
});
const alegreyaSansSC = Alegreya_Sans_SC({
  subsets: ['latin'],
  weight: '300',
  display: 'swap',
  variable: '--font-alegreyaSansSC',
});

export const metadata = {
  title: 'To Do App',
  description: 'Generated by Padmesh',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fasthand.variable} ${alegreyaSansSC.variable}`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  )
}
