import React from 'react';
const ReleaseForm = ({submitHandle}) => {
    let _releaseName, _releaseDate;
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('ReleaseForm -> handleSubmit');
        submitHandle(e, {name: _releaseName.value, date: _releaseDate.value});
        clearForm();
    }
    const clearForm = () => {
        _releaseDate.value = '';
        _releaseName.value = '';
    }
    return (
        <div>
            <h1>Meu Form</h1>
            <form onSubmit={handleSubmit} className="form-inline">
                <label className="sr-only" for="inlineFormInput">Name</label>
                <input ref={input => _releaseName = input} type="text" class="form-control mb-2 mr-sm-2 mb-sm-0" id="inlineFormInput" placeholder="Jane Doe" />

                <label class="sr-only" for="inlineFormInputGroup">Username</label>
                <div className="input-group mb-2 mr-sm-2 mb-sm-0">
                    <div className="input-group-addon">@</div>
                    <input ref={input => _releaseDate = input} type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username" />
                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div> 
    )
}
export default ReleaseForm;