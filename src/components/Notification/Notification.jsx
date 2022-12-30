import PropType from 'prop-types';
import css from '../Notification/Notification.module.css';

export function Notification({ message }) {
  return (
    <div>
      <p className={css.message}>{message}</p>
    </div>
  );
}

Notification.proptype = {
  message: PropType.string.isRequired,
};
