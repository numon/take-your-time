import React, { ChangeEvent, useCallback, useState } from 'react';

const EditForm = ({timeInfo, showForm, updateTimer}: any) => {
  const [ newTitle, setTitle ] = useState(timeInfo.title);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value), []);
  const handleSubmit = useCallback((e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTimer({
      id: timeInfo.id,
      title: newTitle,
    });
    showForm(false);
  }, [timeInfo, newTitle, showForm, updateTimer]);
  const handleClose = useCallback(() => showForm(false), [showForm]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={newTitle} name="title" onChange={handleChange}/>
      <input type="submit" value="ok"/>
      <input type="button" value="X" onClick={handleClose}/>
    </form>
  );

};
export default React.memo(EditForm);
