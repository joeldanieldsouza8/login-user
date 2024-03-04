import { User } from "../../../types/userType";

import styles from './ProductivityItem.module.css'

interface ProductivityItemProps {
  user: User;
}

function ProductivityItem({ user }: ProductivityItemProps) {
  // Convert the productivity object into an array of [key, value] pairs for mapping
  const productivityEntries: [string, number][] = Object.entries(user.productivity);
  console.log(productivityEntries); // debug

  return (
    <div className={styles['productivity-item']}>
      <h3>{user.name}'s Productivity</h3>
      {productivityEntries.map(([day, percentage]) => (
        <div key={day} className={styles['productivity-detail']}>
          <label htmlFor={`progress-${user.empId}-${day}`}>
            Productivity on {day}
          </label>
          <progress
            id={`progress-${user.empId}-${day}`}
            value={percentage}
            max="200"
          />
          <p>{percentage}%</p>
        </div>
      ))}
    </div>
  );
}

export default ProductivityItem;
