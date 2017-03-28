const graphql= require('graphql');

const { GraphQLString, GraphQLSchema, GraphQLObjectType} = graphql;
const axios =require('axios');

const PostType= new GraphQLObjectType({
    name:'Post',
    fields:{
        id:{type:GraphQLString},
        title:{ type:GraphQLString},
        author:{ type: GraphQLString}
    }
});


const RootQuery= new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        post:{
            type: PostType,
            args:{ id: {type: GraphQLString}},
            resolve(parent, args){
                return axios.get(`http://localhost:3000/posts/${args.id}`)
                .then( res => res.data);
            }

        }
    }
});

module.exports= new GraphQLSchema({ query: RootQuery});

