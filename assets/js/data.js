/*
 * Site content. Edit this file to update the homepage — no build step needed.
 *
 * Authors: "Kai Wang" is bolded automatically. Mark equal contribution with *
 * and corresponding/advising with + right after a name, e.g. "Kai Wang*+".
 * topics: agents | paramgen | efficient | data | vision
 * citations: optional Google Scholar count, shown as a highlighted badge.
 * views: optional view count of the X post (number, e.g. 125000), shown on the X button.
 * GitHub stars on Code buttons are fetched live; nothing to update by hand.
 */
window.SITE = {
  publications: [
    {
      title: "StateM: Reaching 95.3% Raw Accuracy, or a $15 Frontier Run, on Terminal-Bench 2.1 via Harness Scaling",
      authors: "Ziheng Qin, Yaxin Lu, Zhangyang Wang, Kai Wang",
      venue: "arXiv 2026", type: "preprint", year: 2026,
      topics: ["agents"], selected: true,
      img: "assets/img/papers/arxiv_statem_2026.webp",
      links: { Paper: "https://arxiv.org/abs/2608.15089", Code: "https://github.com/henryqin1997/statem", X: "https://x.com/henryqin1997/status/2089608567418691863" }
    },
    {
      title: "Position: Weight Space Should Be a First-Class Generative AI Modality",
      authors: "Zhangyang Wang, Peihao Wang, Kai Wang",
      venue: "ICML 2026", type: "conference", year: 2026, note: "Position Paper",
      topics: ["paramgen"], selected: true,
      img: "assets/img/papers/position_icml_2026.webp",
      links: { Paper: "https://arxiv.org/pdf/2605.18632" }
    },
    {
      title: "HY-WU (Part I): An Extensible Functional Neural Memory Framework and An Instantiation in Text-Guided Image Editing",
      authors: "Tencent HY Team. Core contributors: Mengxuan Wu, Xuanlei Zhao, Ziqiao Wang, Ruicheng Feng, Zhangyang Wang, Qinglin Lu, Kai Wang",
      venue: "Tech Report 2026", type: "report", year: 2026,
      topics: ["paramgen"], selected: true,
      img: "assets/img/papers/HY-WU.webp",
      links: { Paper: "https://arxiv.org/pdf/2603.07236", Code: "https://github.com/Tencent-Hunyuan/HY-WU", Project: "https://tencent-hy-wu.github.io/", X: "https://x.com/TencentHunyuan/status/2029644529578692723" }
    },
    {
      title: "Drag-and-Drop LLMs: Zero-Shot Prompt-to-Weights",
      authors: "Zhiyuan Liang+, Dongwen Tang, Yuhao Zhou, Xuanlei Zhao, Mingjia Shi, Wangbo Zhao, Zekai Li, Peihao Wang, Konstantin Schürholt, Damian Borth, Michael M. Bronstein, Yang You, Zhangyang Wang+, Kai Wang+",
      venue: "NeurIPS 2025", type: "conference", year: 2025,
      topics: ["paramgen"], selected: true,
      img: "assets/img/papers/arXiv-2025-DnD.webp",
      links: { Paper: "https://arxiv.org/pdf/2506.16406", Code: "https://github.com/jerryliang24/Drag-and-Drop-LLMs", X: "https://x.com/_akhaliq/status/1937017302999851124" }
    },
    {
      title: "Scaling Up Parameter Generation: A Recurrent Diffusion Approach",
      authors: "Kai Wang*, Dongwen Tang*, Wangbo Zhao, Konstantin Schürholt, Zhangyang Wang+, Yang You+",
      venue: "NeurIPS 2025", type: "conference", year: 2025,
      topics: ["paramgen"], selected: true,
      img: "assets/img/papers/arXiv-2025-RPG.webp",
      links: { Paper: "https://arxiv.org/pdf/2501.11587", Code: "https://github.com/NUS-HPC-AI-Lab/Recurrent-Parameter-Generation", X: "https://x.com/VictorKaiWang1/status/1881380005118419435" }
    },
    {
      title: "Enhance-A-Video: Better Generated Video for Free",
      authors: "Yang Luo, Xuanlei Zhao, Mengzhao Chen, Kaipeng Zhang, Wenqi Shao+, Kai Wang+, Zhangyang Wang, Yang You",
      venue: "Tech Report 2024", type: "report", year: 2024,
      topics: ["efficient"],
      img: "assets/img/papers/enhance-a-video.webp",
      links: { Paper: "https://arxiv.org/pdf/2502.07508", Code: "https://github.com/NUS-HPC-AI-Lab/Enhance-A-Video", X: "https://x.com/YangL_7/status/1870116980717695243" }
    },
    {
      title: "Emphasizing Discriminative Features for Dataset Distillation in Complex Scenarios",
      authors: "Kai Wang*, Zekai Li*, Zhi-Qi Cheng, Samir Khaki, Ahmad Sajedi, Ramakrishna Vedantam, Konstantinos N. Plataniotis, Alexander Hauptmann, Yang You",
      venue: "CVPR 2025", type: "conference", year: 2025,
      topics: ["data"],
      img: "assets/img/papers/arXiv-2024-EDF.webp",
      links: { Paper: "https://arxiv.org/abs/2410.17193", Code: "https://github.com/NUS-HPC-AI-Lab/EDF" }
    },
    {
      title: "Real-Time Video Generation with Pyramid Attention Broadcast",
      authors: "Xuanlei Zhao*, Xiaolong Jin*, Kai Wang*+, Yang You+",
      venue: "ICLR 2025", type: "conference", year: 2025, note: "Co-first & corresponding author · Merged into HF Diffusers",
      topics: ["efficient"], selected: true,
      img: "assets/img/papers/arXiv-2024-PAB.webp",
      links: { Paper: "https://arxiv.org/abs/2408.12588", Project: "https://oahzxl.github.io/PAB/", X: "https://x.com/oahzxl/status/1805939975420330298" }
    },
    {
      title: "A Closer Look at Time Steps is Worthy of Triple Speed-Up for Diffusion Model Training",
      authors: "Kai Wang*, Mingjia Shi*, Zekai Li, Yukun Zhou, Zhihang Yuan, Yuzhang Shang, Xiaojiang Peng, Hanwang Zhang, Yang You",
      venue: "CVPR 2025", type: "conference", year: 2025,
      topics: ["efficient"],
      img: "assets/img/papers/arXiv-2024-SpeeD.webp",
      links: { Paper: "https://arxiv.org/pdf/2405.17403", Code: "https://github.com/kaiwang960112/SpeeD" }
    },
    {
      title: "Neural Network Diffusion",
      authors: "Kai Wang, Dongwen Tang, Boya Zeng, Yida Yin, Zhaopan Xu, Yukun Zhou, Zelin Zang, Trevor Darrell, Zhuang Liu+, Yang You+",
      venue: "arXiv 2024", type: "preprint", year: 2024,
      topics: ["paramgen"], selected: true,
      img: "assets/img/papers/arXiv-2024-p-diff.webp",
      links: { Paper: "https://arxiv.org/pdf/2402.13144.pdf", Code: "https://github.com/NUS-HPC-AI-Lab/Neural-Network-Diffusion", X: "https://twitter.com/_akhaliq/status/1760136914861019645" }
    },
    {
      title: "InfoBatch: Lossless Training Speed Up by Unbiased Dynamic Data Pruning",
      authors: "Ziheng Qin*, Kai Wang*, Zangwei Zheng, Jianyang Gu, Xiangyu Peng, Zhaopan Xu, Daquan Zhou, Lei Shang, Baigui Sun, Xuansong Xie, Yang You",
      venue: "ICLR 2024", type: "conference", year: 2024, note: "Oral (1.2%) · Co-first author & project lead",
      topics: ["data", "efficient"], selected: true,
      img: "assets/img/papers/ICLR-2024-InfoBatch.webp",
      links: { Paper: "https://arxiv.org/pdf/2303.04947.pdf", Code: "https://github.com/NUS-HPC-AI-Lab/InfoBatch", OpenReview: "https://openreview.net/forum?id=C61sk5LsK6" }
    },
    {
      title: "Towards Lossless Dataset Distillation via Difficulty-Aligned Trajectory Matching",
      authors: "Ziyao Guo, Kai Wang*, George Cazenavette, Hui Li, Kaipeng Zhang, Yang You",
      venue: "ICLR 2024", type: "conference", year: 2024, note: "Project lead",
      topics: ["data"],
      img: "assets/img/papers/ICLR-2024-DATM.webp",
      links: { Paper: "https://arxiv.org/pdf/2310.05773.pdf", Code: "https://github.com/NUS-HPC-AI-Lab/DATM", OpenReview: "https://openreview.net/forum?id=rTBL8OhdhH" }
    },
    {
      title: "Dataset Quantization",
      authors: "Daquan Zhou, Kai Wang*, Jianyang Gu*, Xiangyu Peng, Dongze Lian, Yifan Zhang, Yang You, Jiashi Feng",
      venue: "ICCV 2023", type: "conference", year: 2023,
      topics: ["data"],
      img: "assets/img/papers/DQ_ICCV_2023.webp",
      links: { Paper: "https://arxiv.org/pdf/2308.10524.pdf", Code: "https://github.com/magic-research/Dataset_Quantization" }
    },
    {
      title: "DREAM: Efficient Dataset Distillation by Representative Matching",
      authors: "Yanqing Liu, Jianyang Gu, Kai Wang*, Zheng Zhu, Wei Jiang, Yang You",
      venue: "ICCV 2023", type: "conference", year: 2023, note: "Project lead",
      topics: ["data"],
      img: "assets/img/papers/DREAM_ICCV_2023.webp",
      links: { Paper: "https://arxiv.org/pdf/2302.14416.pdf", Code: "https://github.com/lyq312318224/DREAM" }
    },
    {
      title: "DiM: Distilling Dataset into Generative Model",
      authors: "Kai Wang, Jianyang Gu, Daquan Zhou, Zheng Zhu, Wei Jiang, Yang You",
      venue: "arXiv 2023", type: "preprint", year: 2023,
      topics: ["data"],
      img: "assets/img/papers/arXiv-2023-DiM.webp",
      links: { Paper: "https://arxiv.org/pdf/2303.04707.pdf", Code: "https://github.com/vimar-gu/DiM" }
    },
    {
      title: "CAFE: Learning to Condense Dataset by Aligning Features",
      authors: "Kai Wang, Bo Zhao, Xiangyu Peng, Zheng Zhu, Shuo Yang, Shuo Wang, Guan Huang, Hakan Bilen, Xinchao Wang, Yang You",
      venue: "CVPR 2022", type: "conference", year: 2022,
      topics: ["data"], selected: true,
      citations: 470,
      img: "assets/img/papers/CVPR-2022-CAFE.webp",
      links: { Paper: "https://arxiv.org/pdf/2203.01531.pdf", Code: "https://github.com/kaiwang960112/CAFE" }
    },
    {
      title: "An Efficient Training Approach for Very Large Scale Face Recognition",
      authors: "Kai Wang, Shuo Wang, Panpan Zhang, Zhipeng Zhou, Zheng Zhu, Xiaobo Wang, Xiaojiang Peng, Baigui Sun, Hao Li, Yang You",
      venue: "CVPR 2022", type: "conference", year: 2022,
      topics: ["vision", "efficient"],
      img: "assets/img/papers/CVPR-2022-FFC.webp",
      links: { Paper: "https://arxiv.org/pdf/2105.10375.pdf", Code: "https://github.com/tiandunx/FFC" }
    },
    {
      title: "Crafting Better Contrastive Views for Siamese Representation Learning",
      authors: "Xiangyu Peng, Kai Wang*, Zheng Zhu, Mang Wang, Yang You",
      venue: "CVPR 2022", type: "conference", year: 2022, note: "Oral",
      topics: ["vision"],
      img: "assets/img/papers/CVPR-2022-CCROP.webp",
      links: { Paper: "https://arxiv.org/pdf/2202.03278.pdf", Code: "https://github.com/xyupeng/ContrastiveCrop" }
    },
    {
      title: "Suppressing Uncertainties for Large-Scale Facial Expression Recognition",
      authors: "Kai Wang, Xiaojiang Peng, Jianfei Yang, Shijian Lu, Yu Qiao",
      venue: "CVPR 2020", type: "conference", year: 2020,
      topics: ["vision"], selected: true,
      citations: 995,
      img: "assets/img/papers/CVPR-2020-SCN.webp",
      links: { Paper: "https://openaccess.thecvf.com/content_CVPR_2020/papers/Wang_Suppressing_Uncertainties_for_Large-Scale_Facial_Expression_Recognition_CVPR_2020_paper.pdf", Code: "https://github.com/kaiwang960112/Self-Cure-Network" }
    },
    {
      title: "Region Attention Networks for Pose and Occlusion Robust Facial Expression Recognition",
      authors: "Kai Wang, Xiaojiang Peng, Jianfei Yang, Debin Meng, Yu Qiao",
      venue: "IEEE TIP 2020", type: "journal", year: 2020,
      topics: ["vision"], selected: true,
      citations: 1175,
      img: "assets/img/papers/TIP-2020-RAN.webp",
      links: { Paper: "https://arxiv.org/pdf/1905.04075.pdf", Code: "https://github.com/kaiwang960112/Challenge-condition-FER-dataset" }
    }
  ],

  // date: short label shown on the left; html is allowed in text.
  news: [
    { date: "Oct 2026", hot: true, text: '<a href="https://lizekai-richard.github.io/">Zekai</a>\'s paper <b>DD-Ranking: Rethinking the Evaluation of Dataset Distillation</b> is accepted as an <b>Oral</b> at the NeurIPS 2026 Evaluations &amp; Datasets Track (15 orals out of 3,757 submissions, top 0.4%).' },
    { date: "Sep 2026", text: "Four papers accepted to <b>NeurIPS 2026</b>." },
    { date: "Mar 2026", hot: true, text: '<a href="https://tencent-hy-wu.github.io/"><b>HY-WU (混元-无相)</b></a> is released: a next-generation AI system featuring formless and adaptive parameter generation.' },
    { date: "Jan 2026", text: '<a href="https://cypher-bruce.github.io/">Mengxuan</a> is admitted to the UT Austin PhD program. Congratulations!' },
    { date: "Sep 2025", text: "Seven papers accepted to <b>NeurIPS 2025</b>." },
    { date: "May 2025", text: "Two papers accepted to <b>ICML 2025</b>. Congrats to Ziheng, Wangbo, and Pan!" },
    { date: "Mar 2025", text: '<a href="https://lizekai-richard.github.io/">Zekai</a> is admitted to the UCSD PhD program. Congratulations!' },
    { date: "Feb 2025", text: "Four papers accepted to <b>CVPR 2025</b>. Congrats to Zekai, Wangbo, Mingjia, Zhenghao, Haoxuan, and Yukun!" },
    { date: "Feb 2025", text: '<a href="https://oahzxl.github.io/PAB/">Pyramid Attention Broadcast</a> is merged into <a href="https://huggingface.co/docs/diffusers/main/en/api/cache">HuggingFace Diffusers</a>.' },
    { date: "Jan 2025", text: "Passed my PhD thesis defense!" },
    { date: "Dec 2024", text: '<a href="https://oahzxl.github.io/Enhance_A_Video/">Enhance-A-Video</a> is merged into <a href="https://github.com/kijai/ComfyUI-CogVideoXWrapper">ComfyUI-CogVideo</a>, <a href="https://github.com/logtd/ComfyUI-LTXTricks">ComfyUI-LTX</a>, and <a href="https://github.com/kijai/ComfyUI-HunyuanVideoWrapper">ComfyUI-Hunyuan</a>. Many thanks to <a href="https://github.com/kijai">kijai</a>!' },
    { date: "Sep 2024", text: '<a href="https://oahzxl.github.io/PAB/">Pyramid Attention Broadcast</a> is cited by the <a href="https://ai.meta.com/static-resource/movie-gen-research-paper">Meta Movie Gen report</a>.' },
    { date: "Sep 2024", text: "Congrats to my coauthors on their papers accepted to <b>NeurIPS 2024</b>!" },
    { date: "Jul 2024", text: '<a href="https://arxiv.org/pdf/2405.18347">Dataset Growth</a> is accepted to <b>ECCV 2024</b>.' },
    { date: "May 2024", text: "Three papers accepted to <b>ICML 2024</b>." },
    { date: "Jan 2024", text: '<a href="https://github.com/henryqin1997/InfoBatch">InfoBatch</a>, the first lossless dynamic data pruning approach, is selected as an <b>Oral at ICLR 2024</b>.' },
    { date: "Jan 2024", text: '<a href="https://gzyaftermath.github.io/DATM/">DATM</a>, the first lossless dataset distillation approach, is accepted to <b>ICLR 2024</b>.' },
    { date: "Jan 2024", text: "Four papers accepted to <b>ICLR 2024</b>, including one Oral, one Spotlight, and two Posters." },
    { date: "Sep 2023", text: '<a href="https://github.com/RingBDStack/SGDD">SGDD</a>, <a href="https://github.com/Vanint/DatasetExpansion">GIF</a>, and <a href="https://github.com/BDeMo/pFedBreD_public">pFedBreD</a> are accepted to <b>NeurIPS 2023</b>.' },
    { date: "Jul 2023", text: '<a href="https://github.com/lyq312318224/DREAM">DREAM</a>, <a href="https://github.com/magic-research/Dataset_Quantization">Dataset Quantization</a>, and <a href="https://github.com/Thunderbeee/ZSCL">ZSCL</a> are accepted to <b>ICCV 2023</b>.' },
    { date: "Feb 2023", text: '<a href="https://github.com/xu5zhao/BiCro">BiCro</a> and <a href="https://github.com/vimar-gu/MSINet">MSINet</a> are accepted to <b>CVPR 2023</b>.' },
    { date: "Jan 2023", text: '<a href="https://github.com/xyupeng/BETA">BETA</a> is selected as a <b>Spotlight at ICLR 2023</b>.' },
    { date: "Nov 2022", text: '<a href="https://github.com/Huage001/DatasetFactorization">HaBa</a> is selected as a <b>Spotlight at NeurIPS 2022</b>.' },
    { date: "Sep 2022", text: "One paper accepted to <b>NeurIPS 2022</b>." },
    { date: "Jul 2022", text: "One paper accepted to <b>ECCV 2022</b>." },
    { date: "Mar 2022", text: '<a href="https://github.com/xyupeng/ContrastiveCrop">ContrastiveCrop</a> is selected as an <b>Oral at CVPR 2022</b>.' },
    { date: "Mar 2022", text: 'Gave talks at Sun Yat-sen University (invited by Prof. <a href="https://lemondan.github.io/">Xiaodan Liang</a>) and ByteDance (invited by Prof. <a href="https://sites.google.com/site/jshfeng/">Jiashi Feng</a>).' },
    { date: "Mar 2022", text: "Five papers accepted to <b>CVPR 2022</b>, including two first-author papers, one equal-first-author paper, and one second-author paper." },
    { date: "Oct 2021", text: "Our team won one <b>Champion</b> and one <b>Third Place</b> in the ICCV-MFR Challenge, and a <b>Second Place</b> in the InsightFace Track." },
    { date: "Aug 2021", text: "One paper accepted to the ICCV 2021 MFR Workshop." },
    { date: "May 2021", text: "Received the <b>AI Singapore PhD Fellowship</b>!" },
    { date: "May 2021", text: "One paper accepted to <b>IEEE Transactions on Artificial Intelligence</b>." },
    { date: "Mar 2021", text: "Received a PhD offer from <b>NUS</b>!" },
    { date: "Feb 2021", text: "One paper accepted to <b>Neurocomputing</b>." },
    { date: "Jul 2020", text: "Started a full-time internship at <b>Alibaba DAMO Academy</b>." },
    { date: "Jul 2020", text: "One paper accepted to <b>ECCV 2020</b>." },
    { date: "May 2020", text: "One paper accepted to <b>ICIP 2020</b>." },
    { date: "Feb 2020", text: "One paper accepted to <b>CVPR 2020</b>." },
    { date: "Jan 2020", text: "Started a part-time internship at <b>Huawei Cloud</b>." },
    { date: "Dec 2019", text: "One paper accepted to <b>IEEE TIP</b> and one to <b>AAAI 2020</b>." },
    { date: "Oct 2019", text: "Three papers accepted to <b>ICMI 2019</b>." }
  ],

  experience: [
    { logo: "assets/img/logos/tencent.webp", org: "Tencent", url: "https://www.tencent.com/", role: "Principal Researcher", detail: "Leading efforts on code agents for long-horizon tasks", date: "2025 – Present", current: true },
    { logo: "assets/img/logos/nus.webp", org: "National University of Singapore", url: "https://www.nus.edu.sg/", role: "Ph.D. & Research Fellow, Data Science and Machine Learning", detail: 'HPC-AI Lab, advised by Prof. <a href="https://scholar.google.com/citations?user=jF4dPZwAAAAJ&hl=en">Yang You</a> · AI Singapore PhD Fellowship', date: "Aug 2021 – Aug 2025" },
    { logo: "assets/img/logos/cmu.webp", org: "Carnegie Mellon University", url: "https://www.cmu.edu/", role: "Sponsored Researcher (remote)", detail: 'Language Technologies Institute, with Prof. <a href="https://miis.cs.cmu.edu/people/222215651/alexander-hauptmann">Alex Hauptmann</a>', date: "Apr 2024 – Nov 2024" },
    { logo: "assets/img/logos/uoft.webp", org: "University of Toronto", url: "https://www.utoronto.ca/", role: "Affiliated Member (remote)", detail: 'Multimedia Lab, ECE, with Prof. <a href="https://www.comm.utoronto.ca/~kostas/">Konstantinos N. Plataniotis</a>', date: "Nov 2023 – Nov 2024" },
    { logo: "assets/img/logos/damo.webp", org: "Alibaba DAMO Academy", url: "https://damo.alibaba.com/", role: "Research Intern", date: "2020" },
    { logo: "assets/img/logos/huawei.webp", org: "Huawei Cloud", url: "https://www.huaweicloud.com/", role: "Research Intern", date: "2020" },
    { logo: "assets/img/logos/siat.webp", org: "MMLab@SIAT · University of Chinese Academy of Sciences", url: "https://mmlab.siat.ac.cn/", role: "M.S. in Computer Technology", detail: 'Advised by Prof. <a href="https://scholar.google.com/citations?user=gFtI-8QAAAAJ">Yu Qiao</a> and Assoc. Prof. <a href="https://scholar.google.com/citations?user=7oRD67kAAAAJ">Xiaojiang Peng</a>', date: "Sep 2017 – Aug 2020" },
    { logo: "assets/img/logos/bnu.webp", org: "Beijing Normal University, Zhuhai", url: "https://www.bnuz.edu.cn/", role: "B.Eng. in Electrical Engineering and Automation", date: "Sep 2013 – Jul 2017" }
  ],

  honors: [
    { year: "2021", text: "AI Singapore PhD Fellowship" },
    { year: "2021", text: "ICCV MFR Challenge: Champion and Third Place; InsightFace Track: Second Place" },
    { year: "2019", text: "NAIC Challenge: Top 6 / 2,612 teams" },
    { year: "2019", text: "Huawei Garbage Classification Challenge: Champion" },
    { year: "2019", text: "EmotiW 2019 Challenge: two Second Places and one Third Place" },
    { year: "2019", text: "PEER Challenge (hosted by UC Berkeley): Champion" },
    { year: "2018", text: "EmotiW 2018 Challenge: Champion and Second Place" },
    { year: "2017", text: "EmotiW 2017 Challenge: Champion" }
  ],

  students: {
    current: [
      { name: "Ruixi Yu", now: "Undergraduate, Yao Class, Tsinghua" },
      { name: "Cissy Xie", url: "https://lafoucc.github.io/", now: "Undergraduate, NYU → Ph.D., UT Austin" },
      { name: "Hao Tan", url: "https://scholar.google.fi/citations?user=gPEjNFcAAAAJ&hl=en", now: "Ph.D., CASIA" },
      { name: "Chonghua Liao", url: "https://scholar.google.com/citations?user=2fB3YFcAAAAJ", now: "Ph.D., Yao Class, Tsinghua" },
      { name: "Junrui Zhang", now: "Ph.D., NUS" },
      { name: "Mengxuan Wu", url: "https://cypher-bruce.github.io/", now: "Undergraduate, SUSTech → Ph.D., UT Austin" },
      { name: "Yong Zhong", now: "Undergraduate, SUSTech" }
    ],
    alumni: [
      { name: "Xuanlei Zhao", url: "https://oahzxl.github.io/", now: "Ph.D., NUS", pubs: ["ICLR 2025"] },
      { name: "Ziqiao Wang", url: "https://openreview.net/profile?id=~Ziqiao_Wang2", now: "Ph.D., NUS", pubs: ["NeurIPS 2025"] },
      { name: "Yuhao Zhou", url: "https://scholar.google.com/citations?user=bGKF2tUAAAAJ", now: "Ph.D., Sichuan University" },
      { name: "Zhiyuan Liang", url: "https://jerryliang24.github.io/", now: "Undergraduate, USTC", pubs: ["3× NeurIPS 2025"] },
      { name: "Dongwen Tang", url: "https://scholar.google.com/citations?user=9lKm_5IAAAAJ", now: "Undergraduate, Xidian University", pubs: ["2× NeurIPS 2025", "EMNLP 2025"] },
      { name: "Zekai Li", url: "https://lizekai-richard.github.io/", now: "Ph.D., UCSD", pubs: ["2× CVPR 2025", "2× NeurIPS 2025"] },
      { name: "Yukun Zhou", url: "https://twitter.com/YuKunZhou9", now: "Undergraduate, Xidian University", pubs: ["CVPR 2025"] },
      { name: "Tianyi Li", url: "https://scholar.google.com/citations?user=pHXKrL0AAAAJ", now: "Ph.D., HKU" },
      { name: "Ziyao Guo", url: "https://scholar.google.com/citations?user=FlZSxJMAAAAJ", now: "Ph.D., NUS", pubs: ["ICLR 2024", "ICML 2024"] },
      { name: "Yuchen Zhang", url: "https://scholar.google.com/citations?user=Y2oqeP0AAAAJ", now: "Ph.D., PKU & Shanghai AI Lab", pubs: ["ICML 2024"] },
      { name: "Tianle Zhang", url: "https://scholar.google.com/citations?user=jH54BzoAAAAJ", now: "Ph.D., NTU Singapore", pubs: ["ICML 2024"] },
      { name: "Mingjia Shi", url: "https://www.samjs.online/", now: "Ph.D., University of Virginia", pubs: ["NeurIPS 2023", "CVPR 2025"] },
      { name: "Yanqing Liu", url: "https://scholar.google.com.hk/citations?user=2obvvPoAAAAJ", now: "Ph.D., UC Santa Cruz", pubs: ["ICCV 2023"] },
      { name: "Beining Yang", url: "https://scholar.google.cz/citations?user=STiz5AcAAAAJ", now: "Ph.D., University of Edinburgh", pubs: ["NeurIPS 2023"] }
    ]
  },

  service: [
    { role: "Conference Reviewer", venues: "CVPR · ICCV · ECCV · NeurIPS · ICML · ICLR · AAAI" },
    { role: "Journal Reviewer", venues: "TPAMI · TIP · TCSVT · TAFFC · TNNLS" }
  ],

  friends: [
    ["Jianfei Yang", "NTU", "https://marsyang.site/"],
    ["Huaizheng Zhang", "Seed", "https://huaizhengzhang.github.io/"],
    ["Konstantinos N. Plataniotis", "University of Toronto", "https://www.comm.utoronto.ca/~kostas/"],
    ["Zhuang Liu", "Princeton", "https://liuzhuang13.github.io/"],
    ["Atlas Wang", "UT Austin", "https://www.ece.utexas.edu/people/faculty/atlas-wang"],
    ["Yan Yan", "UIC", "https://tomyan555.github.io/"],
    ["Chenliang Xu", "University of Rochester", "https://www.cs.rochester.edu/~cxu22/"],
    ["Yapeng Tian", "UT Dallas", "https://www.yapengtian.com/"],
    ["Ramakrishna Vedantam", "Meta", "https://scholar.google.com/citations?user=v1CRzeAAAAAJ&hl=en"],
    ["Zhijian Liu", "UCSD", "https://zhijianliu.com/"],
    ["Tianlong Chen", "UNC Chapel Hill", "https://tianlong-chen.github.io/"],
    ["Xindi Wu", "Princeton", "https://xindiwu.github.io/"],
    ["George Cazenavette", "MIT CSAIL", "https://georgecazenavette.github.io/"],
    ["Konstantin Schürholt", "University of St. Gallen", "https://kschuerholt.github.io/"],
    ["Zheng Zhu", "Tsinghua University", "http://www.zhengzhu.net/"],
    ["Bo Zhao", "SJTU", "https://bozhaonanjing.wixsite.com/mysite"],
    ["Jiankang Deng", "Huawei London", "https://jiankangdeng.github.io/"],
    ["Shuyang Sun", "Google DeepMind", "https://kevin-ssy.github.io/"],
    ["Hao Luo", "Alibaba Group", "http://luohao.site/"],
    ["Ruicheng Feng", "Tencent HY", "https://jnjaby.github.io/"],
    ["David Junhao Zhang", "Google DeepMind", "https://junhaozhang98.github.io/"],
    ["Zangwei Zheng", "NUS", "https://zhengzangw.com/"],
    ["Yaqi Xie", "CMU", "https://scholar.google.com/citations?user=lBCCo0EAAAAJ&hl=en"],
    ["Fuzhao Xue", "Google DeepMind", "https://xuefuzhao.github.io/"]
  ]
};
