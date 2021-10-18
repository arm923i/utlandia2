from frontend.forms import LeadForm

def leadform (request):
    form = LeadForm()
    context = {"lead_form": form}

    return context