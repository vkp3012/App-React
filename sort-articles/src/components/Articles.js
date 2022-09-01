import React, { useState, useEffect } from 'react'
import { ARTICLES } from './Data'
import 'h8k-components';


const title = "Sorting Articles";


function Articles() {

    let data = ARTICLES;

    const [articlesList, setArticlesList] = useState(data);

    useEffect(() => {
        sortByUpvotes(data);
    },[]);


    const sortByUpvotes = () => {
        var newArticles = [];
        Object.assign(newArticles, articlesList);
        newArticles.sort((a, b) => {
            if (a.upvotes > b.upvotes) {
                return -1;
            }
            if (a.upvotes < b.upvotes) {
                return 1;
            }
            return 0;
        })

        setArticlesList(newArticles);
    }

    const sortByDates = () => {
        var newArticles = {};
        Object.assign(newArticles, articlesList);
        newArticles.sort((a, b) => {
            const aDate = new Date(a.date);
            const bDate = new Date(b.date);
            if (aDate > bDate) {
                return -1;
            }
            if (aDate < bDate) {
                return 1;
            }
            return 0;
        })

        setArticlesList(newArticles);
    }

    return (
        <div className='App'>
            <div>
                <h8k-navbar header={title}></h8k-navbar>
                <div className="layout-row align-items-center justify-content-center my-20 navigation">
                    <label className="form-hint mb-0 text-uppercase font-weight-light">Sort By</label>
                    <button data-testid="most-upvoted-link" className="small" onClick={() => sortByUpvotes()}>Most Upvoted</button>
                    <button data-testid="most-recent-link" className="small" onClick={() => sortByDates()}>Most Recent</button>
                </div>
            </div>
            <div className="card w-50 mx-auto">
                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Upvotes</th>
                            <th>Date</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            data.map((data, index) =>
                            (
                                <tr data-testid="article" key={index}>
                                    <td data-testid="article-title">{data.title}</td>
                                    <td data-testid="article-upvotes">{data.upvotes.toString()}</td>
                                    <td data-testid="article-date">{data.date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Articles