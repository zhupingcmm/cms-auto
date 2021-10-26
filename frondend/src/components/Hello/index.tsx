import { Button } from 'antd';
import { useEffect } from 'react';
import { useHttp } from '../../utils/http';
import { useAsync } from '../../utils/use-async';

interface HelloProps {
  className?: string;
  name: string;
}

export const Hello = ({ className, name }: HelloProps) => {
  const client = useHttp();
  const { data, run } = useAsync();
  useEffect(() => {
    (async () => {
      run(client('testnames'));
    })();
  }, []);
  console.log('data::', data);
  return (
    <div className={className}>
      <Button type="primary">Add</Button>
    </div>
  );
};
