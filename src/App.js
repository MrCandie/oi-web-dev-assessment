import "./App.css";
import Homepage from "./page/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostPage from "./page/PostPage";
import PostDetailPage from "./page/PostDetailPage";
import ProfilePage from "./page/ProfilePage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import CommentPage from "./page/CommentPage";
import CommentDetailPage from "./page/CommentDetailPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<PostPage />} />
        <Route path="/posts/:id" element={<PostDetailPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/comments" element={<CommentPage />} />
        <Route path="/comments/:id" element={<CommentDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
