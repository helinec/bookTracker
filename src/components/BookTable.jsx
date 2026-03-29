//displays books taken from BookActions input by user
//must display in a table format with columns for book name, 
//author, genre, rating, description, and link

import { useState } from 'react';
import { SearchBar } from './SearchBar';

export function BookTable({ books, onDelete, onEdit }) {
  const [editId, setEditId] = useState(null);
  const [editData, setEditData] = useState({});

  function handleEditChange(e) {
    const { name, value } = e.target;
    setEditData(prev => ({ ...prev, [name]: value }));
  }

  function startEdit(idx, book) {
    setEditId(idx);
    setEditData({ ...book });
  }

  function saveEdit(idx) {
    onEdit && onEdit(idx, editData);
    setEditId(null);
  }

  function cancelEdit() {
    setEditId(null);
  }

  return (
    <div>
      <h1>Book Table</h1>
      
      {books.length === 0 ? (
        <p>No books added yet.</p>
      ) : (
        <table className="bookTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Description</th>
              <th>Link</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((b, idx) => (
              <tr key={idx}>
                {editId === idx ? (
                  <>
                    <td>
                      <input type="text" name="name" value={editData.name} onChange={handleEditChange} />
                    </td>
                    <td>
                      <input type="text" name="author" value={editData.author} onChange={handleEditChange} />
                    </td>
                    <td>
                      <input type="text" name="genre" value={editData.genre} onChange={handleEditChange} />
                    </td>
                    <td>
                      <input type="number" name="rating" min="1" max="5" value={editData.rating} onChange={handleEditChange} />
                    </td>
                    <td>
                      <textarea name="description" value={editData.description} onChange={handleEditChange}></textarea>
                    </td>
                    <td>
                      <input type="url" name="link" value={editData.link} onChange={handleEditChange} />
                    </td>
                    <td>
                      <button onClick={() => saveEdit(idx)}>Save</button>
                      <button onClick={cancelEdit}>Cancel</button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{b.name}</td>
                    <td>{b.author}</td>
                    <td>{b.genre}</td>
                    <td>{b.rating}</td>
                    <td>{b.description}</td>
                    <td>
                      {b.link ? (
                        <a href={b.link} target="_blank" rel="noreferrer">
                          link
                        </a>
                      ) : (
                        '-'
                      )}
                    </td>
                    <td>
                      <button onClick={() => startEdit(idx, b)}>Edit</button>
                      <button onClick={() => onDelete && onDelete(idx)}>Delete</button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

//add sorting and filtering later
