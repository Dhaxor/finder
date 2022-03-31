import React, { useState } from "react";

const Header: React.FC = () => {
      const [name, setName] = useState("");
	  const [guest, setGuest] = useState<string[]>([]);

	  const onClick = () => {
		 setName("");
		 setGuest([...guest, name]);
	  }

	  return (
		<div>
			<h1>Header</h1>
			<ul>
				{ guest.map((guest, index) => <li key={index}>{guest}</li>) }
			</ul>
			<input value={name} onChange={(e) => setName(e.target.value)}/>
			<button onClick={onClick} >Click</button>
		</div>
  );
}

export default Header;