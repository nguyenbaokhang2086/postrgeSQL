import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, Mail, Calendar as CalendarIcon, Book, CheckCircle, Trash2, Plus, Zap } from 'lucide-react';
import api from '../../lib/api';


const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [courseIdToEnroll, setCourseIdToEnroll] = useState('');
  const [enrollError, setEnrollError] = useState('');
  const [isEnrolling, setIsEnrolling] = useState(false);

  useEffect(() => {
    fetchUserDetail();
  }, [id]);

  const fetchUserDetail = async () => {
    try {
      // GET /school/users/:id
      const res = await api.get(`/school/users/${id}`);
      setUser(res.data);
    } catch (error) {
      console.error('Failed to fetch user details', error);
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const handleUnenroll = async (courseId) => {
    if (window.confirm('Remove this user from the course?')) {
      try {
        await api.post('/school/unenroll', { userId: Number(id), courseId: Number(courseId) });
        setUser({
          ...user,
          courses: user.courses.filter(c => c.id !== courseId)
        });
      } catch (error) {
        console.error('Failed to unenroll user', error);
        alert('Failed to unenroll: ' + (error.response?.data?.error || error.message));
      }
    }
  };

  const handleEnroll = async (e) => {
    e.preventDefault();
    if (!courseIdToEnroll) return;
    
    setIsEnrolling(true);
    setEnrollError('');
    try {
      // API expects: { "userId": <ID>, "courseId": <ID> }
      await api.post('/school/enroll', { 
        userId: Number(id), 
        courseId: Number(courseIdToEnroll) 
      });
      // Refresh user to get updated courses
      await fetchUserDetail();
      setCourseIdToEnroll('');
    } catch (error) {
      console.error('Failed to enroll', error);
      setEnrollError(error.response?.data?.error || 'Failed to enroll in course. Make sure the Course ID exists.');
    } finally {
      setIsEnrolling(false);
    }
  };

  if (isLoading) {
    return <div className="text-center p-20 text-slate-500">Loading user profile...</div>;
  }

  if (!user) return <div className="p-8 text-center text-slate-500 bg-white m-6 rounded-xl border border-slate-200 shadow-sm">User not found or API error.</div>;

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4 mb-2">
        <Link to="/users" className="p-2 bg-white rounded-full border border-slate-200 text-slate-500 hover:text-blue-600 hover:bg-blue-50 transition-colors shadow-sm">
          <ArrowLeft className="w-5 h-5" />
        </Link>
        <div>
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">User Details</h2>
          <p className="text-slate-500 text-sm mt-1">View profile & manage course enrollments directly.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 space-y-6">
          {/* Profile Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden relative">
            <div className="h-24 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
            <div className="px-6 py-4 flex flex-col items-center relative -top-12 mb-[-3rem]">
              <div className="w-24 h-24 rounded-full bg-white border-4 border-white shadow-md flex items-center justify-center text-4xl font-bold tracking-tight text-blue-600 mb-4 bg-blue-50">
                {user.name?.charAt(0).toUpperCase()}
              </div>
              <h3 className="text-xl font-bold text-slate-800 text-center">{user.name}</h3>
              <p className="text-sm text-slate-500 mb-6 flex items-center mt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2"></span>
                Active Student
              </p>
              
              <div className="w-full space-y-3 pb-2 pt-4 border-t border-slate-100">
                <div className="flex items-center text-sm">
                  <Mail className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-600 truncate">{user.email}</span>
                </div>
                <div className="flex items-center text-sm">
                  <User className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">ID: #{user.id}</span>
                </div>
                <div className="flex items-center text-sm">
                  <CalendarIcon className="w-4 h-4 text-slate-400 mr-3 flex-shrink-0" />
                  <span className="text-slate-600">Joined {new Date(user.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
            <h3 className="font-bold text-slate-800 mb-3 flex items-center">
               <Zap className="w-4 h-4 text-emerald-500 mr-2" />
               Quick Enrollment
            </h3>
            <p className="text-xs text-slate-500 mb-4">You need the Course ID to enroll manually since global tracking is unavailable.</p>
            
            <form onSubmit={handleEnroll} className="space-y-3">
              {enrollError && <div className="text-xs text-red-600 bg-red-50 p-2 rounded">{enrollError}</div>}
              <div>
                 <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">Course ID</label>
                 <input 
                   type="number"
                   value={courseIdToEnroll}
                   required
                   onChange={(e) => setCourseIdToEnroll(e.target.value)}
                   className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500"
                   placeholder="e.g. 5"
                 />
              </div>
              <button 
                type="submit" 
                disabled={isEnrolling}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-lg flex justify-center items-center transition-colors text-sm disabled:opacity-70"
              >
                {isEnrolling ? 'Enrolling...' : <><Plus className="w-4 h-4 mr-1" /> Enroll in Course</>}
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2">
          {/* Enrollments Card */}
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden min-h-[400px]">
            <div className="p-6 border-b border-slate-200 flex justify-between items-center">
              <div>
                <h3 className="text-lg font-bold text-slate-800 flex items-center">
                  <Book className="w-5 h-5 mr-2 text-blue-500" />
                  Enrolled Courses Transcript
                </h3>
                <p className="text-sm text-slate-500 mt-1">Academic records retrieved from API endpoint</p>
              </div>
              <span className="bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full border border-blue-200">
                {user.courses?.length || 0} Total
              </span>
            </div>
            
            <div className="p-0">
              {(!user.courses || user.courses.length === 0) ? (
                <div className="text-center py-20 px-6 flex flex-col items-center">
                   <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100">
                      <Book className="w-8 h-8 text-slate-300" />
                   </div>
                   <h4 className="text-slate-700 font-medium tracking-tight mb-1">No Courses Enrolled</h4>
                   <p className="text-slate-500 text-sm max-w-md">Use the Quick Enrollment panel to add courses manually via Course ID.</p>
                </div>
              ) : (
                <ul className="divide-y divide-slate-100">
                  {user.courses.map(course => (
                    <li key={course.id} className="p-6 hover:bg-slate-50 transition-colors flex justify-between items-center group">
                      <div className="flex items-start">
                        <div className="w-12 h-12 rounded bg-indigo-50 border border-indigo-100 text-indigo-700 flex flex-col items-center justify-center font-bold tracking-tight text-xs mr-4 mt-0.5">
                          <span className="text-[10px] text-indigo-400 font-medium leading-none">ID</span>
                          {course.id}
                        </div>
                        <div>
                          <h4 className="text-slate-800 font-bold mb-1">{course.title}</h4>
                          <p className="text-xs text-slate-500 flex items-center">
                            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono mr-2">{course.code}</span>
                            <CheckCircle className="w-3 h-3 text-emerald-500 mr-1" />
                            Enrolled actively
                          </p>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleUnenroll(course.id)}
                        className="text-red-500 hover:text-white hover:bg-red-500 border border-red-100 px-3 py-1.5 rounded-lg text-xs font-medium transition-colors opacity-80"
                        title="Remove from course"
                      >
                        Unenroll
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
