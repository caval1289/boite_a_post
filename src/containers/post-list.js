import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { readAllPost } from '../actions/index';
import PostListItem from '../components/post-list-item'

class PostList extends Component {

    componentWillMount() {
        this.props.readAllPost()
    }

    renderPosts() {
        const { posts } = this.props
        if (posts) {
            return posts.map((post) => {
                return <PostListItem key={post.id} post={post} />
            })
        }
    }
    render() {
        return (
            <div>
                <h1>Liste des posts</h1>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Titre</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPosts()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ readAllPost }, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
