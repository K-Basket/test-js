import test from './test';

export const App = () => {
  const temp = test.toString(); // дурацкая запись, чтобы не отображалась ошибка

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '100px',
        // alignItems: 'cen  ter',
        fontSize: 15,
        color: '#ffffff',
        background: '#464646',
      }}
    >
      <h1>Test JavaScript</h1>
      <h2>{temp}</h2>
    </div>
  );
};
