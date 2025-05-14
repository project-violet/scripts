// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

const domain2 = 'gold-usergeneratedcontent.net';

function create_download_url(id) {
  return "https://ltn.gold-usergeneratedcontent.net/galleries/" + id + ".js";
}

function gg_s(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); }

var gg = {};
var window = {};
var document = {};
var name = {};
var location = {};
var customElements = {};
var history = {};
var locationbar = {};
var menubar = {};
var personalbar = {};
var scrollbars = {};
var statusbar = {};
var toolbar = {};
var status = {};
var closed = {};
var frames = {};
var length = {};
var top = {};
var opener = {};
var parent = {};
var frameElement = {};
var navigator = {};
var origin = {};
var external = {};
var screen = {};
var innerWidth = {};
var innerHeight = {};
var scrollX = {};
var pageXOffset = {};
var scrollY = {};
var pageYOffset = {};
var visualViewport = {};
var screenX = {};
var screenY = {};
var outerWidth = {};
var outerHeight = {};
var devicePixelRatio = {};
var clientInformation = {};
var screenLeft = {};
var screenTop = {};
var defaultStatus = {};
var defaultstatus = {};
var styleMedia = {};
var onsearch = {};
var isSecureContext = {};
var performance = {};
var onappinstalled = {};
var onbeforeinstallprompt = {};
var crypto = {};
var indexedDB = {};
var webkitStorageInfo = {};
var sessionStorage = {};
var localStorage = {};
var onbeforexrselect = {};
var onabort = {};
var onblur = {};
var oncancel = {};
var oncanplay = {};
var oncanplaythrough = {};
var onchange = {};
var onclick = {};
var onclose = {};
var oncontextmenu = {};
var oncuechange = {};
var ondblclick = {};
var ondrag = {};
var ondragend = {};
var ondragenter = {};
var ondragleave = {};
var ondragover = {};
var ondragstart = {};
var ondrop = {};
var ondurationchange = {};
var onemptied = {};
var onended = {};
var onerror = {};
var onfocus = {};
var onformdata = {};
var oninput = {};
var oninvalid = {};
var onkeydown = {};
var onkeypress = {};
var onkeyup = {};
var onload = {};
var onloadeddata = {};
var onloadedmetadata = {};
var onloadstart = {};
var onmousedown = {};
var onmouseenter = {};
var onmouseleave = {};
var onmousemove = {};
var onmouseout = {};
var onmouseover = {};
var onmouseup = {};
var onmousewheel = {};
var onpause = {};
var onplay = {};
var onplaying = {};
var onprogress = {};
var onratechange = {};
var onreset = {};
var onresize = {};
var onscroll = {};
var onseeked = {};
var onseeking = {};
var onselect = {};
var onstalled = {};
var onsubmit = {};
var onsuspend = {};
var ontimeupdate = {};
var ontoggle = {};
var onvolumechange = {};
var onwaiting = {};
var onwebkitanimationend = {};
var onwebkitanimationiteration = {};
var onwebkitanimationstart = {};
var onwebkittransitionend = {};
var onwheel = {};
var onauxclick = {};
var ongotpointercapture = {};
var onlostpointercapture = {};
var onpointerdown = {};
var onpointermove = {};
var onpointerup = {};
var onpointercancel = {};
var onpointerover = {};
var onpointerout = {};
var onpointerenter = {};
var onpointerleave = {};
var onselectstart = {};
var onselectionchange = {};
var onanimationend = {};
var onanimationiteration = {};
var onanimationstart = {};
var ontransitionrun = {};
var ontransitionstart = {};
var ontransitionend = {};
var ontransitioncancel = {};
var onafterprint = {};
var onbeforeprint = {};
var onbeforeunload = {};
var onhashchange = {};
var onlanguagechange = {};
var onmessage = {};
var onmessageerror = {};
var onoffline = {};
var ononline = {};
var onpagehide = {};
var onpageshow = {};
var onpopstate = {};
var onrejectionhandled = {};
var onstorage = {};
var onunhandledrejection = {};
var onunload = {};
var alert = {};
var atob = {};
var blur = {};
var btoa = {};
var cancelAnimationFrame = {};
var cancelIdleCallback = {};
var captureEvents = {};
var clearInterval = {};
var clearTimeout = {};
var close = {};
var confirm = {};
var createImageBitmap = {};
var fetch = {};
var find = {};
var focus = {};
var getComputedStyle = {};
var getSelection = {};
var matchMedia = {};
var moveBy = {};
var moveTo = {};
var open = {};
var postMessage = {};
var print = {};
var prompt = {};
var queueMicrotask = {};
var releaseEvents = {};
var reportError = {};
var requestAnimationFrame = {};
var requestIdleCallback = {};
var resizeBy = {};
var resizeTo = {};
var scroll = {};
var scrollBy = {};
var scrollTo = {};
var setInterval = {};
var setTimeout = {};
var stop = {};
var webkitCancelAnimationFrame = {};
var webkitRequestAnimationFrame = {};
var chrome = {};
var caches = {};
var cookieStore = {};
var ondevicemotion = {};
var ondeviceorientation = {};
var ondeviceorientationabsolute = {};
var showDirectoryPicker = {};
var showOpenFilePicker = {};
var showSaveFilePicker = {};
var originAgentCluster = {};
var trustedTypes = {};
var speechSynthesis = {};
var onpointerrawupdate = {};
var crossOriginIsolated = {};
var scheduler = {};
var openDatabase = {};
var webkitRequestFileSystem = {};
var webkitResolveLocalFileSystemURL = {};
var cr = {};


gg = { m: function(g) {
var o = 0;
switch (g) {
case 4043:
case 388:
case 2979:
case 399:
case 696:
case 673:
case 3762:
case 2406:
case 790:
case 2781:
case 2286:
case 3029:
case 3398:
case 1878:
case 3837:
case 3945:
case 2565:
case 1416:
case 3281:
case 2526:
case 930:
case 1188:
case 3401:
case 772:
case 4008:
case 317:
case 2397:
case 3654:
case 1163:
case 924:
case 1554:
case 1174:
case 935:
case 2796:
case 2283:
case 2937:
case 2845:
case 759:
case 1182:
case 2268:
case 1977:
case 1504:
case 3189:
case 350:
case 4046:
case 41:
case 1028:
case 289:
case 2448:
case 3630:
case 298:
case 2044:
case 2832:
case 342:
case 1530:
case 3768:
case 3938:
case 2374:
case 2310:
case 3791:
case 3783:
case 1334:
case 3296:
case 795:
case 2150:
case 1872:
case 3392:
case 624:
case 3385:
case 3050:
case 736:
case 2765:
case 3901:
case 2726:
case 3586:
case 3144:
case 752:
case 2953:
case 728:
case 3721:
case 3226:
case 2089:
case 2906:
case 1098:
case 1195:
case 282:
case 1662:
case 1494:
case 1329:
case 3562:
case 1913:
case 2956:
case 1691:
case 1683:
case 234:
case 745:
case 1811:
case 2723:
case 3099:
case 469:
case 3591:
case 816:
case 2770:
case 481:
case 2640:
case 4031:
case 1092:
case 220:
case 2714:
case 392:
case 1668:
case 1730:
case 248:
case 2948:
case 3568:
case 3000:
case 1477:
case 551:
case 504:
case 3947:
case 2567:
case 2596:
case 635:
case 537:
case 3869:
case 1176:
case 13:
case 2364:
case 3778:
case 2373:
case 1080:
case 2430:
case 1333:
case 875:
case 1018:
case 1548:
case 3277:
case 1238:
case 2777:
case 2284:
case 2052:
case 3131:
case 2105:
case 1886:
case 1737:
case 1967:
case 1996:
case 2651:
case 3294:
case 1336:
case 2155:
case 2575:
case 129:
case 2315:
case 892:
case 316:
case 771:
case 559:
case 3239:
case 3635:
case 619:
case 1553:
case 498:
case 2969:
case 489:
case 3606:
case 3549:
case 697:
case 1981:
case 3057:
case 595:
case 1883:
case 947:
case 3371:
case 1649:
case 1506:
case 96:
case 870:
case 3642:
case 1868:
case 1305:
case 908:
case 2840:
case 612:
case 3213:
case 3224:
case 3260:
case 185:
case 536:
case 122:
case 899:
case 2317:
case 1684:
case 158:
case 3440:
case 2760:
case 2724:
case 855:
case 3584:
case 206:
case 2930:
case 713:
case 4089:
case 1748:
case 1756:
case 1251:
case 3033:
case 3318:
case 528:
case 3158:
case 1247:
case 1923:
case 1970:
case 540:
case 1357:
case 434:
case 2632:
case 281:
case 2594:
case 66:
case 3679:
case 1319:
case 3216:
case 3749:
case 3312:
case 2031:
case 1493:
case 647:
case 2469:
case 3152:
case 3572:
case 448:
case 1735:
case 751:
case 919:
case 2645:
case 3036:
case 579:
case 1753:
case 2716:
case 2211:
case 842:
case 3143:
case 2954:
case 677:
case 1286:
case 3972:
case 4018:
case 2878:
case 3411:
case 1382:
case 1406:
case 2621:
case 2939:
case 2769:
case 2884:
case 1979:
case 890:
case 3187:
case 265:
case 2554:
case 1325:
case 1366:
case 1134:
case 3665:
case 3269:
case 2085:
case 2188:
case 3626:
case 1565:
case 2416:
case 313:
case 859:
case 2504:
case 260:
case 592:
case 3095:
case 2182:
case 1796:
case 1767:
case 1937:
case 1845:
case 2334:
case 3978:
case 910:
case 1388:
case 2872:
case 2413:
case 4012:
case 1310:
case 3670:
case 3740:
case 2530:
case 2028:
case 337:
case 1514:
case 2125:
case 2424:
case 2460:
case 2197:
case 2399:
case 1044:
case 1851:
case 3066:
case 3025:
case 422:
case 588:
case 1765:
case 1935:
case 1847:
case 214:
case 1221:
case 852:
case 2975:
case 840:
case 3824:
case 964:
case 1479:
case 3860:
case 125:
case 3254:
case 2195:
case 3082:
case 2494:
case 2127:
case 2439:
case 1593:
case 657:
case 1581:
case 555:
case 517:
case 3911:
case 458:
case 3693:
case 2569:
case 2730:
case 203:
case 2924:
case 1948:
case 1640:
case 3088:
case 2092:
case 120:
case 1714:
case 3484:
case 2668:
case 3344:
case 2691:
case 3074:
case 1956:
case 2683:
case 3063:
case 3478:
case 3816:
case 480:
case 3122:
case 1801:
case 1596:
case 879:
case 1395:
case 2704:
case 1129:
case 2333:
case 2862:
case 1524:
case 1560:
case 162:
case 3968:
case 3624:
case 3660:
case 352:
case 1136:
case 3237:
case 1320:
case 3613:
case 775:
case 3983:
case 3991:
case 3881:
case 639:
case 1513:
case 2470:
case 50:
case 3551:
case 749:
case 2886:
case 568:
case 3017:
case 2503:
case 591:
case 2737:
case 1278:
case 1008:
case 1404:
case 2238:
case 340:
case 1777:
case 1284:
case 1052:
case 2164:
case 2426:
case 2465:
case 1516:
case 2173:
case 2535:
case 3745:
case 3616:
case 1133:
case 3675:
case 3279:
case 345:
case 871:
case 1058:
case 2336:
case 3331:
case 2305:
case 1840:
case 2542:
case 3732:
case 676:
case 379:
case 2993:
case 2981:
case 2891:
case 2883:
case 1739:
case 1141:
case 1317:
case 1157:
case 1904:
case 1359:
case 3248:
case 3352:
case 541:
case 799:
case 3826:
case 3865:
case 3747:
case 2678:
case 1713:
case 3491:
case 1724:
case 684:
case 106:
case 2307:
case 2109:
case 3468:
case 3073:
case 4061:
case 3064:
case 258:
case 1638:
case 3870:
case 2706:
case 3823:
case 2201:
case 632:
case 2672:
case 1539:
case 1031:
case 2493:
case 656:
case 3532:
case 2742:
case 2357:
case 3462:
case 2071:
case 3694:
case 2579:
case 976:
case 3814:
case 993:
case 733:
case 1107:
case 1954:
case 1309:
case 4087:
case 804:
case 395:
case 3242:
case 1775:
case 851:
case 3180:
case 1716:
case 1211:
case 3701:
case 3545:
case 3206:
case 3015:
case 3118:
case 2711:
case 4034:
case 2216:
case 2749:
case 2108:
case 3031:
case 529:
case 1870:
case 2152:
case 1921:
case 1235:
case 1823:
case 760:
case 1694:
case 159:
case 1814:
case 381:
case 902:
case 3594:
case 2275:
case 2679:
case 1532:
case 195:
case 1346:
case 889:
case 3107:
case 3954:
case 3309:
case 1701:
case 1206:
case 1545:
case 1302:
case 470:
case 3249:
case 2036:
case 4000:
case 3157:
case 3359:
case 2224:
case 53:
case 190:
case 3119:
case 3317:
case 918:
case 475:
case 1308:
case 1747:
case 4050:
case 2637:
case 2213:
case 765:
case 2033:
case 2102:
case 2318:
case 2055:
case 2578:
case 449:
case 1203:
case 1064:
case 1020:
case 2146:
case 3760:
case 306:
case 1343:
case 3930:
case 1896:
case 1009:
case 1501:
case 807:
case 1616:
case 3272:
case 1986:
case 2635:
case 2239:
case 450:
case 3601:
case 3454:
case 848:
case 3575:
case 3133:
case 3315:
case 820:
case 1675:
case 433:
case 2019:
case 3969:
case 1421:
case 2041:
case 2606:
case 721:
case 1624:
case 1660:
case 3136:
case 3430:
case 2648:
case 2784:
case 362:
case 4029:
case 714:
case 2277:
case 2007:
case 3513:
case 1237:
case 3320:
case 3364:
case 1613:
case 1991:
case 1893:
case 3373:
case 1017:
case 1547:
case 3651:
case 455:
case 558:
case 2603:
case 3647:
case 618:
case 1551:
case 1171:
case 140:
case 3284:
case 825:
case 3105:
case 882:
case 3404:
case 320:
case 3714:
case 292:
case 348:
case 1204:
case 171:
case 729:
case 3956:
case 1074:
case 1063:
case 3723:
case 2806:
case 2099:
case 2583:
case 307:
case 2328:
case 3770:
case 2835:
case 2223:
case 3567:
case 3437:
case 1816:
case 1667:
case 1122:
case 1875:
case 3327:
case 1230:
case 4036:
case 270:
case 3935:
case 3847:
case 3726:
case 2586:
case 1066:
case 1025:
case 1128:
case 778:
case 3953:
case 2445:
case 2385:
case 73:
case 923:
case 382:
case 4033:
case 954:
case 99:
case 1824:
case 4055:
case 3942:
case 1472:
case 1949:
case 491:
case 3089:
case 468:
case 3593:
case 2265:
case 2669:
case 3268:
case 869:
case 1161:
case 3796:
case 3291:
case 3937:
case 3845:
case 2447:
case 3403:
case 780:
case 1839:
case 1623:
case 1670:
case 2791:
case 2296:
case 1978:
case 3456:
case 3388:
case 2392:
case 3514:
case 137:
case 4041:
case 389:
case 2630:
case 3448:
case 398:
case 4019:
case 3363:
case 1614:
case 104:
case 242:
case 686:
case 4057:
case 441:
case 3793:
case 3781:
case 1972:
case 3382:
case 1411:
case 69:
case 1187:
case 1389:
case 2361:
case 2932:
case 2762:
case 217:
case 3325:
case 2654:
case 1877:
case 3199:
case 2837:
case 2945:
case 2786:
case 3526:
case 3435:
case 2401:
case 1192:
case 1679:
case 2532:
case 3319:
case 860:
case 3117:
case 3357:
case 2694:
case 2462:
case 65:
case 3159:
case 259:
case 4074:
case 51:
case 471:
case 2870:
case 1152:
case 2639:
case 3706:
case 2823:
case 3672:
case 1216:
case 938:
case 1005:
case 1312:
case 1108:
case 4088:
case 2358:
case 1036:
case 2486:
case 3753:
case 798:
case 2701:
case 2545:
case 3735:
case 926:
case 380:
case 1143:
case 2076:
case 295:
case 1804:
case 2346:
case 3467:
case 2352:
case 1213:
case 3703:
case 2865:
case 2747:
case 1854:
case 322:
case 290:
case 1224:
case 1584:
case 191:
case 3109:
case 3914:
case 865:
case 3684:
case 10:
case 358:
case 2064:
case 2020:
case 272:
case 3923:
case 3970:
case 3821:
case 2203:
case 3678:
case 3251:
case 2483:
case 1033:
case 4082:
case 2491:
case 1102:
case 1318:
case 4095:
case 2675:
case 245:
case 734:
case 4027:
case 3336:
case 1294:
case 720:
case 3426:
case 1635:
case 3173:
case 3553:
case 2867:
case 748:
case 2009:
case 2745:
case 3535:
case 2501:
case 2616:
case 2986:
case 116:
case 1653:
case 3611:
case 3981:
case 3891:
case 638:
case 1019:
case 437:
case 3012:
case 2331:
case 3305:
case 2962:
case 2732:
case 3542:
case 3779:
case 2090:
case 1642:
case 279:
case 2237:
case 33:
case 1778:
case 2991:
case 1656:
case 2983:
case 2893:
case 814:
case 2881:
case 1007:
case 3470:
case 3176:
case 3423:
case 236:
case 3548:
case 2738:
case 2968:
case 2624:
case 2660:
case 252:
case 3355:
case 228:
case 413:
case 3238:
case 782:
case 1603:
case 2551:
case 2017:
case 725:
case 2547:
case 3737:
case 3967:
case 506:
case 2344:
case 3683:
case 459:
case 3811:
case 2478:
case 3924:
case 303:
case 2204:
case 2185:
case 829:
case 1034:
case 2484:
case 321:
case 3704:
case 4015:
case 2696:
case 1835:
case 1947:
case 878:
case 1050:
case 3975:
case 2097:
case 2066:
case 490:
case 3916:
case 1445:
case 1901:
case 314:
case 762:
case 1226:
case 3439:
case 1669:
case 1322:
case 2693:
case 3569:
case 3061:
case 2472:
case 2254:
case 3195:
case 1432:
case 6:
case 3494:
case 3662:
case 3127:
case 1447:
case 3182:
case 520:
case 3300:
case 781:
case 769:
case 548:
case 1604:
case 150:
case 507:
case 3977:
case 3504:
case 4009:
case 1387:
case 605:
case 2614:
case 204:
case 142:
case 3530:
case 2740:
case 1768:
case 1938:
case 3028:
case 3125:
case 880:
case 3460:
case 1879:
case 3399:
case 1296:
case 2978:
case 2670:
case 1361:
case 3884:
case 1762:
case 963:
case 436:
case 3022:
case 822:
case 1521:
case 2972:
case 1398:
case 2411:
case 452:
case 3939:
case 2269:
case 3350:
case 3188:
case 2626:
case 706:
case 3110:
case 525:
case 1786:
case 213:
case 3163:
case 4059:
case 600:
case 3475:
case 3174:
case 155:
case 1588:
case 1370:
case 2:
case 3980:
case 3918:
case 14:
case 174:
case 2126:
case 2692:
case 2473:
case 2068:
case 1510:
case 1907:
case 1154:
case 1574:
case 167:
case 1455:
case 2599:
case 2083:
case 1314:
case 357:
case 315:
case 3809:
case 573:
case 596:
case 913:
case 1846:
case 1795:
case 2304:
case 1858:
case 1802:
case 3697:
case 3666:
case 3229:
case 3817:
case 1597:
case 3859:
case 1566:
case 1525:
case 2114:
case 893:
case 1582:
case 82:
case 719:
case 2880:
case 904:
case 2698:
case 671:
case 937:
case 4078:
case 310:
case 1285:
case 1941:
case 1405:
case 3589:
case 2661:
case 884:
case 2193:
case 1292:
case 3815:
case 613:
case 553:
case 2417:
case 1774:
case 1831:
case 1933:
case 1287:
case 1955:
case 2799:
case 3070:
case 1407:
case 3014:
case 364:
case 1788:
case 3200:
case 2964:
case 2871:
case 19:
case 3418:
case 2920:
case 3480:
case 101:
case 1457:
case 1905:
case 1441:
case 2529:
case 1419:
case 535:
case 1782:
case 3820:
case 3873:
case 1381:
case 3412:
case 2369:
case 2196:
case 2622:
case 2490:
case 186:
case 3250:
case 205:
case 2750:
case 856:
case 3191:
case 3183:
case 832:
case 3065:
case 2685:
case 2289:
case 2915:
case 1766:
case 708:
case 4:
case 2342:
case 2246:
case 2505:
case 4068:
case 1929:
case 3461:
case 2757:
case 2306:
case 3922:
case 2202:
case 2828:
case 2671:
case 2258:
case 4083:
case 2482:
case 3498:
case 1103:
case 2353:
case 1212:
case 928:
case 3702:
case 3301:
case 1156:
case 1576:
case 2335:
case 1450:
case 796:
case 1045:
case 1515:
case 2160:
case 2497:
case 2466:
case 877:
case 3985:
case 3827:
case 3615:
case 3077:
case 945:
case 1400:
case 1218:
case 695:
case 3347:
case 3149:
case 1280:
case 2303:
case 1717:
case 3487:
case 78:
case 2927:
case 2885:
case 2995:
case 3207:
case 3743:
case 1360:
case 1324:
case 2555:
case 332:
case 4062:
case 2474:
case 2410:
case 1153:
case 2822:
case 519:
case 1564:
case 2208:
case 2252:
case 2084:
case 1434:
case 3673:
case 356:
case 979:
case 3664:
case 3620:
case 1135:
case 753:
case 1646:
case 1509:
case 857:
case 118:
case 3609:
case 831:
case 3205:
case 400:
case 1950:
case 3178:
case 640:
case 427:
case 3075:
case 3345:
case 1271:
case 2892:
case 1590:
case 3888:
case 972:
case 2519:
case 3863:
case 1429:
case 3961:
case 3731:
case 2541:
case 3236:
case 2705:
case 2049:
case 339:
case 2557:
case 2177:
case 2898:
case 27:
case 244:
case 735:
case 959:
case 393:
case 3024:
case 3060:
case 4021:
case 3428:
case 3013:
case 2861:
case 2974:
case 3338:
case 2963:
case 3543:
case 2733:
case 2755:
case 1643:
case 3659:
case 810:
case 3617:
case 1179:
case 1559:
case 3897:
case 1051:
case 1608:
case 226:
case 3552:
case 3172:
case 32:
case 2337:
case 1900:
case 3857:
case 1599:
case 1091:
case 2314:
case 3841:
case 2907:
case 2563:
case 1330:
case 999:
case 24:
case 353:
case 274:
case 1126:
case 1464:
case 1420:
case 3592:
case 163:
case 3908:
case 1244:
case 917:
case 2858:
case 739:
case 3600:
case 3952:
case 3587:
case 2727:
case 2846:
case 564:
case 1959:
case 1687:
case 1917:
case 670:
case 2326:
case 2222:
case 1550:
case 1123:
case 1415:
case 1114:
case 335:
case 3785:
case 793:
case 1909:
case 1354:
case 776:
case 311:
case 897:
case 2130:
case 1086:
case 2436:
case 1729:
case 2919:
case 2285:
case 3069:
case 3561:
case 1698:
case 1062:
case 1818:
case 3598:
case 3722:
case 692:
case 2527:
case 3263:
case 3274:
case 3836:
case 1459:
case 784:
case 2169:
case 100:
case 975:
case 1700:
case 418:
case 531:
case 515:
case 557:
case 3210:
case 655:
case 1193:
case 254:
case 373:
case 396:
case 3030:
case 201:
case 3792:
case 2788:
case 1871:
case 1920:
case 1734:
case 2955:
case 1799:
case 2407:
case 812:
case 3368:
case 2831:
case 2287:
case 2763:
case 1196:
case 1490:
case 286:
case 642:
case 2782:
case 3522:
case 3798:
case 2381:
case 2393:
case 2419:
case 3225:
case 2457:
case 3629:
case 2905:
case 3931:
case 3297:
case 3266:
case 2766:
case 2797:
case 3585:
case 743:
case 756:
case 1685:
case 1289:
case 3140:
case 1915:
case 4051:
case 650:
case 1976:
case 105:
case 970:
case 732:
case 86:
case 3349:
case 3712:
case 2032:
case 3311:
case 1482:
case 1306:
case 3571:
case 3151:
case 1202:
case 1828:
case 1072:
case 3605:
case 474:
case 2631:
case 4040:
case 1342:
case 1719:
case 1246:
case 312:
case 764:
case 2148:
case 3636:
case 2045:
case 2515:
case 1113:
case 1335:
case 873:
case 896:
case 2212:
case 1243:
case 916:
case 1995:
case 2759:
case 2142:
case 576:
case 2218:
case 3718:
case 2434:
case 36:
case 2038:
case 3101:
case 1116:
case 1410:
case 2564:
case 15:
case 2520:
case 3780:
case 1078:
case 1463:
case 3829:
case 1348:
case 3655:
case 1533:
case 2360:
case 2324:
case 52:
case 731:
case 3800:
case 2271:
case 2776:
case 2602:
case 1736:
case 1231:
case 584:
case 423:
case 2715:
case 830:
case 401:
case 287:
case 1177:
case 1557:
case 3641:
case 1379:
case 1011:
case 49:
case 2429:
case 1049:
case 90:
case 3276:
case 3771:
case 3834:
case 2590:
case 138:
case 2999:
case 486:
case 1755:
case 397:
case 1507:
case 1861:
case 3056:
case 835:
case 3384:
case 1680:
case 3048:
case 202:
case 2934:
case 3580:
case 1898:
case 144:
case 710:
case 3273:
case 2900:
case 126:
case 3850:
case 319:
case 543:
case 2559:
case 3132:
case 2517:
case 3003:
case 2047:
case 1427:
case 556:
case 3507:
case 2338:
case 1056:
case 3974:
case 3861:
case 3963:
case 338:
case 3755:
case 2992:
case 2882:
case 1580:
case 3898:
case 344:
case 1444:
case 293:
case 2060:
case 1145:
case 3680:
case 4026:
case 4065:
case 2552:
case 1850:
case 2508:
case 3139:
case 22:
case 3337:
case 629:
case 1132:
case 1003:
case 2659:
case 3427:
case 2255:
case 3194:
case 2825:
case 2617:
case 2233:
case 2897:
case 2558:
case 2502:
case 985:
case 8:
case 2345:
case 74:
case 1138:
case 2184:
case 509:
case 2205:
case 3736:
case 3887:
case 1053:
case 3519:
case 3011:
case 2332:
case 1657:
case 2874:
case 464:
case 3049:
case 4014:
case 3705:
case 1619:
case 1215:
case 3177:
case 3557:
case 3379:
case 63:
case 1276:
case 678:
case 1771:
case 3982:
case 1834:
case 3892:
case 1372:
case 383:
case 1042:
case 2487:
case 2207:
case 2351:
case 2752:
case 2708:
case 680:
case 3303:
case 3410:
case 3822:
case 3208:
case 1718:
case 2673:
case 2664:
case 16:
case 2620:
case 3488:
case 1259:
case 3707:
case 147:
case 3533:
case 2743:
case 3555:
case 3175:
case 232:
case 3078:
case 1829:
case 1217:
case 3474:
case 1151:
case 3202:
case 800:
case 3828:
case 1147:
case 978:
case 457:
case 3671:
case 1349:
case 3258:
case 2094:
case 3482:
case 1311:
case 2498:
case 284:
case 3342:
case 3505:
case 2039:
case 1489:
case 2531:
case 3741:
case 3072:
case 2461:
case 3757:
case 1636:
case 2257:
case 754:
case 3497:
case 112:
case 3536:
case 2746:
case 2895:
case 2219:
case 3353:
case 587:
case 2676:
case 2702:
case 1290:
case 3113:
case 2971:
case 2864:
case 1522:
case 1798:
case 4013:
case 2412:
case 903:
case 3196:
case 3167:
case 3490:
case 2250:
case 1362:
case 1225:
case 1931:
case 1761:
case 1297:
case 3529:
case 4060:
case 476:
case 2065:
case 3685:
case 1140:
case 42:
case 660:
case 1402:
case 2183:
case 2191:
case 1458:
case 1386:
case 921:
case 1054:
case 3976:
case 2627:
case 2162:
case 327:
case 2299:
case 2695:
case 574:
case 54:
case 1274:
case 709:
case 1836:
case 1210:
case 1004:
case 1408:
case 1452:
case 2876:
case 300:
case 1288:
case 2418:
case 3964:
case 1383:
case 3628:
case 173:
case 196:
case 1805:
case 1368:
case 1443:
case 3799:
case 277:
case 3476:
case 960:
case 2697:
case 838:
case 2666:
case 111:
case 2625:
case 2817:
case 3086:
case 2859:
case 1946:
case 3114:
case 702:
case 210:
case 1561:
case 1807:
case 1431:
case 2081:
case 456:
case 1598:
case 1321:
case 2912:
case 603:
case 3062:
case 826:
case 1295:
case 231:
case 3330:
case 484:
case 523:
case 3599:
case 1857:
case 2674:
case 257:
case 2663:
case 215:
case 363:
case 1592:
case 1728:
case 718:
case 4039:
case 3534:
case 2744:
case 2980:
case 2610:
case 2688:
case 3126:
case 3464:
case 3420:
case 3473:
case 3068:
case 3812:
case 2121:
case 1952:
case 3244:
case 3500:
case 3687:
case 3917:
case 554:
case 1587:
case 1024:
case 2518:
case 193:
case 1060:
case 2048:
case 3773:
case 1992:
case 3934:
case 1882:
case 302:
case 2378:
case 2580:
case 981:
case 3720:
case 3764:
case 2607:
case 297:
case 3643:
case 1013:
case 48:
case 2384:
case 1987:
case 1825:
case 3179:
case 61:
case 3051:
case 1866:
case 2132:
case 1508:
case 2273:
case 3652:
case 1172:
case 1552:
case 1205:
case 1546:
case 1609:
case 867:
case 1016:
case 2053:
case 2035:
case 3646:
case 3001:
case 2138:
case 3715:
case 3271:
case 3658:
case 3776:
case 3950:
case 874:
case 1810:
case 1690:
case 2042:
case 2771:
case 2372:
case 2619:
case 2215:
case 139:
case 2989:
case 387:
case 4030:
case 2641:
case 3429:
case 2657:
case 1874:
case 1961:
case 1731:
case 3394:
case 1236:
case 1347:
case 1149:
case 3280:
case 1708:
case 1077:
case 1351:
case 3106:
case 3218:
case 886:
case 57:
case 3717:
case 3142:
case 91:
case 2037:
case 526:
case 2217:
case 2829:
case 2633:
case 2259:
case 247:
case 3360:
case 3324:
case 1673:
case 1664:
case 2101:
case 3135:
case 1928:
case 3153:
case 3573:
case 4069:
case 3520:
case 3929:
case 1461:
case 2209:
case 2489:
case 1531:
case 3103:
case 3844:
case 962:
case 2151:
case 1922:
case 2079:
case 1702:
case 89:
case 3156:
case 3450:
case 854:
case 3212:
case 1676:
case 801:
case 1241:
case 212:
case 1827:
case 583:
case 3709:
case 1257:
case 4048:
case 3419:
case 907:
case 2362:
case 2629:
case 2833:
case 3905:
case 2931:
case 2761:
case 2266:
case 1250:
case 661:
case 3782:
case 1971:
case 698:
case 1820:
case 2798:
case 4056:
case 1412:
case 948:
case 2458:
case 2386:
case 2282:
case 419:
case 2402:
case 1183:
case 3797:
case 75:
case 1168:
case 2446:
case 2140:
case 4053:
case 2452:
case 1876:
case 3169:
case 1234:
case 3292:
case 809:
case 2288:
case 2210:
case 2004:
case 4035:
case 2408:
case 3527:
case 2787:
case 2263:
case 2274:
case 563:
case 1162:
case 1695:
case 2443:
case 3955:
case 1023:
case 1070:
case 177:
case 3774:
case 3831:
case 2368:
case 3933:
case 1340:
case 3763:
case 3287:
case 4006:
case 273:
case 354:
case 296:
case 1480:
case 3710:
case 1014:
case 2528:
case 2792:
case 925:
case 1200:
case 3788:
case 1418:
case 2391:
case 1544:
case 1859:
case 3566:
case 235:
case 77:
case 1666:
case 1229:
case 3436:
case 2650:
case 802:
case 3852:
case 4037:
case 1471:
case 620:
case 2321:
case 3405:
case 3957:
case 505:
case 726:
case 3104:
case 3285:
case 634:
case 408:
case 2069:
case 2807:
case 3040:
case 1688:
case 374:
case 2634:
case 3510:
case 3370:
case 1890:
case 1744:
case 246:
case 1980:
case 3323:
case 2857:
case 3433:
case 115:
case 1663:
case 157:
case 3314:
case 818:
case 2295:
case 3455:
case 2227:
case 2587:
case 3846:
case 3795:
case 1809:
case 783:
case 412:
case 3228:
case 3858:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1747242001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,];
var gg_b = "1747242001/";

function subdomain_from_url(url, base, dir) {
        var retval = '';
        if (!base) {
                if (dir === 'webp') {
                        retval = 'w';
                } else if (dir === 'avif') {
                        retval = 'a';
                }
        }
        
        var b = 16;
        
        var r = /\/[0-9a-f]{61}([0-9a-f]{2})([0-9a-f])/;
        var m = r.exec(url);
        if (!m) {
                return retval;
        }
        
        var g = parseInt(m[2]+m[1], b);
        if (!isNaN(g)) {
                if (base) {
                        retval = String.fromCharCode(97 + gg_m[g]) + base;
                } else {
                        retval = retval + (1+gg_m[g]);
                }
        }
        
        return retval;
}


function url_from_url(url, base, dir) {
        return url.replace(/\/\/..?\.(?:gold-usergeneratedcontent\.net|hitomi\.la)\//, '//'+subdomain_from_url(url, base, dir)+'.'+domain2+'/');
}

function full_path_from_hash(hash) {
        return gg_b+gg_s(hash)+'/'+hash;
}


function real_full_path_from_hash(hash) {
        return hash.replace(/^.*(..)(.)$/, '$2/$1/'+hash);
}

function url_from_hash(_galleryid, image, dir, ext) {
        ext = ext || dir || image.name.split('.').pop();
        if (dir === 'webp' || dir === 'avif') {
                dir = '';
        } else {
                dir += '/';
        }
        
        return 'https://a.'+domain2+'/'+dir+full_path_from_hash(image.hash)+'.'+ext;
}

function url_from_url_from_hash(_galleryid, image, dir, ext, base) {
        if ('tn' === base) {
                return url_from_url('https://a.'+domain2+'/'+dir+'/'+real_full_path_from_hash(image.hash)+'.'+ext, base);
        }
        return url_from_url(url_from_hash(_galleryid, image, dir, ext), base, dir);
}


function hitomi_get_image_list() {
  files = galleryinfo["files"];
  dir = "webp";
  type = "webp";
  base = "webp";
  result = [];
  btresult = [];
  stresult = [];
  for (var file of files) {
    result.push(url_from_url(url_from_hash(0, file, dir), undefined, dir));
    btresult.push(url_from_url_from_hash(0, file, 'webpbigtn', 'webp', 'tn'));
    stresult.push(url_from_url_from_hash(0, file, type+'smalltn', type, 'tn'));
  }
  return JSON.stringify({
    btresult: btresult,
    stresult: stresult,
    result: result,
  });
}

function hitomi_get_header_content(id) {
  return JSON.stringify({
      'referer': `https://hitomi.la/reader/${id}.html`,
      'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.3',
  });
}
