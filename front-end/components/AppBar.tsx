import { FC } from 'react'
import styles from '../styles/Home.module.css'
//import { WalletMultiButton } from '@solana/wallet-adapter-react-ui'
import Image from 'next/image'
import dynamic from "next/dynamic";

const WalletMultiButton = dynamic(
    () =>
      import("@solana/wallet-adapter-react-ui").then(
        (mod) => mod.WalletMultiButton
      ),
    {
      ssr: false,
    }
  );

export const AppBar: FC = () => {
    return (
        <div className={styles.AppHeader}>
            <Image src="/solanaLogo.png" alt="Events Main Page" height={15} width={100} />
            <span>
                Events List</span>
            <WalletMultiButton />
        </div>
    )
}