import styles from './values-list.module.scss'
import { FC } from 'react'

import { ValueCard } from '@ui';

interface ValuesListProps {
  list: any[]
  onSelect: (value: any) => void
}

const ValuesList: FC<ValuesListProps> = ({
  list,
  onSelect,
}) => {
  return (
    <div className={styles['values-list']}>
      {list.map((value) => (
        <ValueCard
          key={value}
          text={value}
          imgSrc={value ? `./assets/images/${value}.png` : undefined}
          onClick={() => onSelect(value)}
          onErrorImg='./assets/images/argentina.png'
        />
      ))}
    </div>
  )
}

export { ValuesList }