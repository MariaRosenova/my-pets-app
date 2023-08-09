const Details = () => {
    return (
        <section id="edit-page" className="edit">
            <form id="edit-form" action="#" method="">
                <fieldset>
                    <legend>Edit my Pet</legend>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" value="Milo" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea name="description" id="description">
                                Today, some dogs are used as pets, others are used to help humans...
                            </textarea>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="image">Image URL</label>
                        <span className="input">
                            <input type="text" name="image" id="image" value="/images/dog.png" />
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="type">Type</label>
                        <span className="input">
                            <select id="type" name="type">
                                <option value="cat">Cat</option>
                                <option value="dog" selected>Dog</option>
                                <option value="parrot">Parrot</option>
                                <option value="reptile">Reptile</option>
                                <option value="other">Other</option>
                            </select>
                        </span>
                    </p>
                    <input className="button submit" type="submit" value="Save" />
                </fieldset>
            </form>
        </section>
    );
}
