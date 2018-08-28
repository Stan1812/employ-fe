import { Button } from 'antd';
const TopicItem = (topic, handleClick) => {
  return <div onClick={handleClick}>{topic}</div>;
};
export default TopicItem;
