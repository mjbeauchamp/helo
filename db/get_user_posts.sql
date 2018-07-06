select helo_posts.id, helo_posts.title, helo_posts.image_url, helo_posts.content, helo_posts.user_id, helo_users.username, helo_users.password, helo_users.profile_pic
from helo_posts
inner join helo_users
on helo_posts.user_id = helo_users.id
where helo_posts.user_id = $1;