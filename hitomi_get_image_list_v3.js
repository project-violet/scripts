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
var o = 1;
switch (g) {
case 2697:
case 3198:
case 3887:
case 1513:
case 1361:
case 2156:
case 1807:
case 434:
case 474:
case 1463:
case 3643:
case 1761:
case 3932:
case 3031:
case 1795:
case 3364:
case 601:
case 3287:
case 640:
case 1530:
case 1780:
case 1034:
case 387:
case 1395:
case 2502:
case 995:
case 2596:
case 116:
case 3920:
case 2468:
case 3300:
case 3268:
case 1207:
case 3700:
case 2961:
case 1048:
case 300:
case 10:
case 665:
case 2789:
case 4094:
case 2539:
case 221:
case 3130:
case 2593:
case 1617:
case 483:
case 3662:
case 1915:
case 356:
case 865:
case 4040:
case 1989:
case 3122:
case 3113:
case 281:
case 2631:
case 3097:
case 2153:
case 385:
case 997:
case 1077:
case 1466:
case 3646:
case 4086:
case 3569:
case 3121:
case 2632:
case 2425:
case 2160:
case 23:
case 1600:
case 3695:
case 4072:
case 238:
case 3444:
case 711:
case 2104:
case 2219:
case 1675:
case 1836:
case 3680:
case 1977:
case 907:
case 1343:
case 1948:
case 390:
case 1441:
case 961:
case 3859:
case 3661:
case 1743:
case 446:
case 679:
case 372:
case 2285:
case 1124:
case 451:
case 1470:
case 2290:
case 2819:
case 2181:
case 2844:
case 3490:
case 691:
case 1346:
case 1934:
case 4052:
case 920:
case 1810:
case 1299:
case 891:
case 2962:
case 2061:
case 1233:
case 2479:
case 1450:
case 2609:
case 1169:
case 2357:
case 2757:
case 2584:
case 1210:
case 3317:
case 3032:
case 3717:
case 3879:
case 1217:
case 3262:
case 2831:
case 2068:
case 3552:
case 3710:
case 365:
case 1434:
case 856:
case 2087:
case 2523:
case 2508:
case 2750:
case 641:
case 504:
case 3027:
case 3399:
case 93:
case 1063:
case 2231:
case 1817:
case 1186:
case 3431:
case 1779:
case 3938:
case 3333:
case 938:
case 3192:
case 978:
case 367:
case 3736:
case 3944:
case 2370:
case 3586:
case 1066:
case 2770:
case 3336:
case 2297:
case 2627:
case 3128:
case 3103:
case 2925:
case 517:
case 122:
case 280:
case 3572:
case 3990:
case 887:
case 205:
case 3985:
case 2897:
case 1725:
case 1759:
case 1042:
case 182:
case 1905:
case 214:
case 1359:
case 14:
case 2766:
case 295:
case 1255:
case 450:
case 1229:
case 784:
case 1151:
case 3085:
case 1070:
case 3679:
case 391:
case 4047:
case 406:
case 960:
case 1966:
case 3540:
case 1829:
case 947:
case 710:
case 4078:
case 2114:
case 3571:
case 2638:
case 3137:
case 3154:
case 3307:
case 1200:
case 3432:
case 3861:
case 3659:
case 1140:
case 3927:
case 981:
case 75:
case 2820:
case 3707:
case 1768:
case 1387:
case 1275:
case 1264:
case 2480:
case 1171:
case 1050:
case 773:
case 758:
case 1787:
case 1554:
case 2461:
case 921:
case 2763:
case 872:
case 3174:
case 832:
case 3551:
case 3165:
case 890:
case 3420:
case 1636:
case 2690:
case 137:
case 3895:
case 594:
case 2685:
case 672:
case 379:
case 2987:
case 489:
case 3190:
case 3281:
case 3804:
case 2783:
case 4057:
case 2599:
case 2383:
case 1051:
case 1170:
case 416:
case 1245:
case 294:
case 1105:
case 2821:
case 2665:
case 2352:
case 741:
case 429:
case 3119:
case 3204:
case 2049:
case 700:
case 597:
case 3323:
case 3312:
case 1367:
case 725:
case 3928:
case 2460:
case 2125:
case 1845:
case 1767:
case 756:
case 3712:
case 2221:
case 1544:
case 787:
case 1040:
case 123:
case 2637:
case 3906:
case 3091:
case 1071:
case 3726:
case 1469:
case 3649:
case 1150:
case 3614:
case 4077:
case 727:
case 40:
case 2786:
case 595:
case 1590:
case 183:
case 1585:
case 1735:
case 2386:
case 3065:
case 1611:
case 3505:
case 505:
case 1994:
case 49:
case 1612:
case 364:
case 810:
case 146:
case 4015:
case 2340:
case 3856:
case 2371:
case 610:
case 624:
case 520:
case 3688:
case 1239:
case 2473:
case 2816:
case 2771:
case 2628:
case 1086:
case 3566:
case 4089:
case 2035:
case 2394:
case 884:
case 217:
case 3006:
case 3092:
case 3991:
case 684:
case 3416:
case 2298:
case 1971:
case 3873:
case 1083:
case 772:
case 3563:
case 2692:
case 2351:
case 3253:
case 2914:
case 732:
case 2453:
case 1896:
case 3028:
case 1802:
case 259:
case 2222:
case 3635:
case 976:
case 3954:
case 2213:
case 3413:
case 3422:
case 658:
case 561:
case 673:
case 2482:
case 1314:
case 2507:
case 1626:
case 3430:
case 1202:
case 311:
case 204:
case 3276:
case 2813:
case 873:
case 858:
case 2822:
case 2476:
case 1811:
case 1776:
case 3021:
case 163:
case 4063:
case 3302:
case 3318:
case 3437:
case 3702:
case 3796:
case 2564:
case 3718:
case 2060:
case 2449:
case 3109:
case 1382:
case 1782:
case 2758:
case 2004:
case 917:
case 2854:
case 1211:
case 2837:
case 767:
case 1024:
case 1753:
case 3849:
case 0:
case 1451:
case 2081:
case 1353:
case 2378:
case 3681:
case 915:
case 2891:
case 482:
case 4042:
case 3465:
case 2274:
case 1756:
case 44:
case 1601:
case 4066:
case 3393:
case 57:
case 3998:
case 3916:
case 3491:
case 3793:
case 1978:
case 1509:
case 2865:
case 2621:
case 2874:
case 276:
case 3132:
case 765:
case 3660:
case 1440:
case 1826:
case 3098:
case 3016:
case 2206:
case 435:
case 1078:
case 3492:
case 3406:
case 2435:
case 1597:
case 2622:
case 3235:
case 3577:
case 3131:
case 2073:
case 150:
case 1226:
case 611:
case 35:
case 2369:
case 4070:
case 2806:
case 521:
case 1157:
case 106:
case 1047:
case 994:
case 373:
case 3835:
case 545:
case 4005:
case 1618:
case 811:
case 2162:
case 864:
case 2467:
case 2076:
case 324:
case 1208:
case 3030:
case 1760:
case 3784:
case 3534:
case 3557:
case 2828:
case 3673:
case 477:
case 560:
case 1924:
case 1639:
case 3288:
case 1693:
case 1704:
case 2082:
case 3656:
case 1808:
case 1823:
case 3921:
case 3867:
case 3013:
case 2960:
case 2143:
case 3345:
case 2203:
case 3701:
case 547:
case 3197:
case 3888:
case 2324:
case 1177:
case 4050:
case 1215:
case 1889:
case 987:
case 1429:
case 2594:
case 3766:
case 4039:
case 1036:
case 395:
case 1455:
case 2090:
case 3366:
case 3809:
case 171:
case 3742:
case 1815:
case 3059:
case 493:
case 3025:
case 2137:
case 3638:
case 1289:
case 3342:
case 131:
case 2044:
case 927:
case 2540:
case 2019:
case 1650:
case 3149:
case 744:
case 2280:
case 3480:
case 985:
case 397:
case 853:
case 3495:
case 2432:
case 653:
case 678:
case 3232:
case 2659:
case 2625:
case 638:
case 1010:
case 3820:
case 87:
case 2038:
case 2707:
case 2880:
case 3690:
case 925:
case 3685:
case 956:
case 1641:
case 1727:
case 752:
case 3832:
case 2261:
case 1033:
case 466:
case 4002:
case 1605:
case 3968:
case 1907:
case 2165:
case 2846:
case 1234:
case 511:
case 845:
case 776:
case 154:
case 1567:
case 3523:
case 3087:
case 1126:
case 821:
case 3831:
case 972:
case 2310:
case 1642:
case 3979:
case 361:
case 1417:
case 1338:
case 1588:
case 1007:
case 645:
case 4001:
case 932:
case 1999:
case 1857:
case 307:
case 2192:
case 3446:
case 109:
case 2733:
case 2027:
case 3231:
case 2862:
case 2431:
case 2938:
case 1910:
case 4084:
case 2333:
case 2128:
case 3443:
case 3627:
case 142:
case 1663:
case 403:
case 3741:
case 3341:
case 18:
case 3705:
case 2572:
case 3370:
case 2586:
case 1385:
case 3770:
case 2497:
case 188:
case 3297:
case 201:
case 2843:
case 1112:
case 2668:
case 12:
case 240:
case 1123:
case 860:
case 320:
case 3526:
case 660:
case 1877:
case 305:
case 1936:
case 1744:
case 2985:
case 1344:
case 3188:
case 2687:
case 1319:
case 564:
case 1870:
case 2009:
case 3885:
case 2997:
case 378:
case 2695:
case 704:
case 3219:
case 897:
case 2680:
case 1805:
case 170:
case 130:
case 2259:
case 2225:
case 3160:
case 3425:
case 3459:
case 33:
case 1797:
case 2485:
case 3819:
case 3290:
case 1029:
case 1397:
case 965:
case 3777:
case 2490:
case 1205:
case 3620:
case 1145:
case 2859:
case 1241:
case 272:
case 2524:
case 695:
case 2020:
case 1615:
case 3479:
case 3061:
case 2279:
case 895:
case 3238:
case 1689:
case 1410:
case 457:
case 2438:
case 2317:
case 2717:
case 3609:
case 3095:
case 1250:
case 3334:
case 1064:
case 3946:
case 3584:
case 3080:
case 967:
case 3156:
case 1720:
case 2868:
case 2932:
case 3227:
case 1263:
case 4:
case 584:
case 3697:
case 149:
case 347:
case 1677:
case 3046:
case 360:
case 605:
case 4011:
case 2700:
case 1017:
case 991:
case 3827:
case 1582:
case 2558:
case 3173:
case 524:
case 2375:
case 1139:
case 2287:
case 614:
case 3518:
case 287:
case 2764:
case 805:
case 3596:
case 256:
case 2547:
case 979:
case 558:
case 1866:
case 533:
case 1309:
case 225:
case 345:
case 1955:
case 1634:
case 1657:
case 200:
case 3176:
case 3539:
case 2130:
case 1118:
case 2662:
case 861:
case 241:
case 1196:
case 2097:
case 1556:
case 2355:
case 3153:
case 2909:
case 1266:
case 2755:
case 2646:
case 3315:
case 2113:
case 102:
case 3043:
case 1842:
case 2578:
case 3631:
case 193:
case 3056:
case 3622:
case 471:
case 3613:
case 2235:
case 431:
case 1286:
case 585:
case 2098:
case 2016:
case 2653:
case 352:
case 2406:
case 2492:
case 3146:
case 258:
case 2835:
case 3630:
case 1886:
case 2548:
case 3073:
case 25:
case 3769:
case 1426:
case 500:
case 1039:
case 604:
case 1093:
case 3892:
case 3806:
case 1658:
case 2682:
case 3488:
case 1252:
case 3517:
case 3981:
case 3082:
case 1423:
case 166:
case 4033:
case 1412:
case 3467:
case 1945:
case 2267:
case 224:
case 1721:
case 2030:
case 1321:
case 587:
case 1018:
case 3828:
case 2557:
case 2197:
case 3616:
case 3053:
case 3324:
case 499:
case 1283:
case 2656:
case 2013:
case 284:
case 527:
case 112:
case 3960:
case 3143:
case 2403:
case 2345:
case 3228:
case 795:
case 4010:
case 1984:
case 3953:
case 720:
case 3358:
case 3414:
case 714:
case 409:
case 2922:
case 2913:
case 2454:
case 2396:
case 2437:
case 1595:
case 2796:
case 1084:
case 3060:
case 1580:
case 2814:
case 2849:
case 1155:
case 1129:
case 1561:
case 3854:
case 1713:
case 3837:
case 1411:
case 1045:
case 1313:
case 4007:
case 2930:
case 2474:
case 894:
case 3274:
case 911:
case 1840:
case 3161:
case 1294:
case 42:
case 590:
case 1939:
case 1716:
case 3973:
case 428:
case 572:
case 2681:
case 3891:
case 3778:
case 694:
case 3865:
case 3621:
case 336:
case 3347:
case 2660:
case 1894:
case 1100:
case 1271:
case 2916:
case 2491:
case 2604:
case 488:
case 2793:
case 1175:
case 644:
case 3371:
case 2542:
case 1391:
case 3473:
case 2688:
case 1652:
case 1439:
case 4029:
case 3816:
case 540:
case 3898:
case 4055:
case 1026:
case 264:
case 3168:
case 2965:
case 1107:
case 1247:
case 126:
case 2974:
case 1278:
case 2498:
case 3298:
case 2873:
case 3216:
case 3603:
case 2127:
case 1374:
case 470:
case 567:
case 3794:
case 1765:
case 186:
case 1847:
case 2028:
case 2311:
case 3830:
case 4000:
case 359:
case 2876:
case 2954:
case 2635:
case 1858:
case 3351:
case 2253:
case 4075:
case 3949:
case 4064:
case 1672:
case 565:
case 2430:
case 1496:
case 3230:
case 1402:
case 1354:
case 1754:
case 1012:
case 3822:
case 1023:
case 1008:
case 3476:
case 1258:
case 3482:
case 1568:
case 3088:
case 77:
case 1694:
case 46:
case 1303:
case 4017:
case 1328:
case 3821:
case 3967:
case 1445:
case 973:
case 1011:
case 3665:
case 1136:
case 3481:
case 2190:
case 3783:
case 3599:
case 1224:
case 3988:
case 2323:
case 2312:
case 836:
case 745:
case 2903:
case 3125:
case 2421:
case 2550:
case 2708:
case 3221:
case 2054:
case 2144:
case 3404:
case 3691:
case 449:
case 2881:
case 2204:
case 1:
case 636:
case 3752:
case 1824:
case 2906:
case 2091:
case 2326:
case 1525:
case 2614:
case 1269:
case 1110:
case 984:
case 2138:
case 3637:
case 143:
case 402:
case 1706:
case 1792:
case 3372:
case 591:
case 3772:
case 1926:
case 2505:
case 1651:
case 3786:
case 3536:
case 1199:
case 2065:
case 2359:
case 120:
case 3248:
case 86:
case 2607:
case 3112:
case 2042:
case 2759:
case 668:
case 551:
case 546:
case 3319:
case 868:
case 2970:
case 3936:
case 3744:
case 180:
case 1705:
case 1741:
case 2506:
case 222:
case 3663:
case 342:
case 1925:
case 1443:
case 1627:
case 1959:
case 3390:
case 1297:
case 388:
case 849:
case 1770:
case 269:
case 3385:
case 2066:
case 1370:
case 2477:
case 2183:
case 2172:
case 2950:
case 309:
case 602:
case 1446:
case 107:
case 3834:
case 3857:
case 2379:
case 1135:
case 4060:
case 2779:
case 2817:
case 2063:
case 802:
case 3126:
case 1750:
case 1523:
case 703:
case 3567:
case 3234:
case 3999:
case 99:
case 3588:
case 3417:
case 3338:
case 1462:
case 1979:
case 3933:
case 1831:
case 2217:
case 1685:
case 237:
case 277:
case 2875:
case 3605:
case 1220:
case 3033:
case 1832:
case 444:
case 1763:
case 2800:
case 1461:
case 2554:
case 2537:
case 399:
case 2787:
case 2050:
case 574:
case 1619:
case 197:
case 2264:
case 534:
case 3464:
case 2275:
case 1644:
case 2768:
case 3514:
case 870:
case 1820:
case 3010:
case 2963:
case 892:
case 3400:
case 830:
case 1342:
case 331:
case 813:
case 3289:
case 2489:
case 4056:
case 1025:
case 371:
case 1742:
case 235:
case 1209:
case 929:
case 2966:
case 275:
case 2005:
case 2699:
case 2041:
case 2942:
case 2565:
case 2070:
case 1809:
case 2151:
case 1366:
case 2574:
case 989:
case 2229:
case 2255:
case 1766:
case 3429:
case 3266:
case 1153:
case 3556:
case 809:
case 1043:
case 3842:
case 609:
case 2989:
case 2516:
case 1315:
case 3929:
case 2158:
case 1182:
case 3634:
case 3955:
case 145:
case 3709:
case 937:
case 208:
case 3196:
case 2442:
case 3102:
case 3118:
case 7:
case 3242:
case 121:
case 550:
case 2048:
case 3582:
case 1062:
case 3863:
case 494:
case 518:
case 36:
case 3332:
case 160:
case 3648:
case 216:
case 2147:
case 82:
case 3407:
case 1502:
case 2057:
case 1596:
case 2395:
case 1518:
case 62:
case 2530:
case 2780:
case 828:
case 2380:
case 2795:
case 1227:
case 842:
case 3720:
case 88:
case 2361:
case 1156:
case 975:
case 3964:
case 68:
case 2178:
case 3677:
case 1980:
case 3975:
case 888:
case 1697:
case 3000:
case 3504:
case 871:
case 2762:
case 2833:
case 922:
case 2362:
case 2210:
case 2899:
case 3689:
case 1080:
case 631:
case 1734:
case 1946:
case 3064:
case 1334:
case 3250:
case 969:
case 2521:
case 2450:
case 404:
case 4067:
case 3433:
case 1061:
case 982:
case 3731:
case 2810:
case 2299:
case 4088:
case 2629:
case 2655:
case 2746:
case 2934:
case 1545:
case 948:
case 2346:
case 3850:
case 786:
case 2236:
case 1844:
case 757:
case 3397:
case 3029:
case 1290:
case 3055:
case 1819:
case 1181:
case 298:
case 2470:
case 596:
case 1285:
case 3241:
case 2015:
case 3101:
case 1620:
case 29:
case 2977:
case 2675:
case 2836:
case 1890:
case 1219:
case 138:
case 178:
case 153:
case 1885:
case 13:
case 1459:
case 699:
case 4035:
case 1425:
case 392:
case 3841:
case 1748:
case 370:
case 3805:
case 2089:
case 3100:
case 2440:
case 136:
case 6:
case 176:
case 754:
case 1956:
case 1874:
case 1621:
case 1865:
case 2978:
case 3175:
case 3164:
case 2773:
case 1195:
case 3271:
case 2471:
case 414:
case 3294:
case 1529:
case 2601:
case 709:
case 598:
case 3993:
case 1891:
case 3398:
case 59:
case 3798:
case 1973:
case 405:
case 3624:
case 4087:
case 3129:
case 3561:
case 3155:
case 2520:
case 2753:
case 3251:
case 2024:
case 4068:
case 3322:
case 3313:
case 2115:
case 3918:
case 3045:
case 3411:
case 788:
case 3722:
case 1854:
case 643:
case 1004:
case 1414:
case 72:
case 407:
case 1358:
case 3669:
case 3730:
case 3580:
case 2376:
case 3084:
case 1564:
case 843:
case 2776:
case 3330:
case 728:
case 2189:
case 2177:
case 1324:
case 1724:
case 3852:
case 1053:
case 1616:
case 2381:
case 1698:
case 3546:
case 1228:
case 1203:
case 312:
case 619:
case 2808:
case 923:
case 626:
case 2704:
case 771:
case 1517:
case 2693:
case 2639:
case 1488:
case 3002:
case 3901:
case 3018:
case 3321:
case 826:
case 1076:
case 3412:
case 3945:
case 144:
case 3423:
case 3647:
case 366:
case 2148:
case 3408:
case 2696:
case 3117:
case 2618:
case 3886:
case 508:
case 799:
case 2047:
case 206:
case 1892:
case 2226:
case 250:
case 50:
case 1613:
case 974:
case 4059:
case 4025:
case 393:
case 1146:
case 3543:
case 2078:
case 152:
case 1206:
case 1292:
case 657:
case 3306:
case 3392:
case 3651:
case 3869:
case 445:
case 3792:
case 3706:
case 1386:
case 749:
case 2735:
case 3199:
case 91:
case 1786:
case 2335:
case 1179:
case 3269:
case 2150:
case 76:
case 2469:
case 3525:
case 768:
case 4043:
case 1637:
case 481:
case 2519:
case 575:
case 2986:
case 2767:
case 274:
case 803:
case 2845:
case 1460:
case 1125:
case 3640:
case 234:
case 3484:
case 447:
case 2538:
case 1014:
case 2788:
case 1752:
case 3:
case 603:
case 2983:
case 1404:
case 2388:
case 3923:
case 3445:
case 906:
case 3912:
case 4062:
case 3328:
case 3703:
case 2884:
case 460:
case 577:
case 2141:
case 3694:
case 950:
case 1988:
case 1599:
case 2424:
case 702:
case 1481:
case 1476:
case 4061:
case 3737:
case 3008:
case 3911:
case 3012:
case 3754:
case 104:
case 3418:
case 3402:
case 2202:
case 2626:
case 3568:
case 2458:
case 3258:
case 1213:
case 893:
case 1222:
case 357:
case 1949:
case 3672:
case 1453:
case 1751:
case 1351:
case 1606:
case 1692:
case 2527:
case 3858:
case 4095:
case 2072:
case 2839:
case 319:
case 3278:
case 2893:
case 3683:
case 386:
case 3774:
case 1456:
case 963:
case 2086:
case 3365:
case 47:
case 2163:
case 1603:
case 2940:
case 1898:
case 3026:
case 1771:
case 1816:
case 1187:
case 1473:
case 3791:
case 3878:
case 582:
case 1340:
case 548:
case 326:
case 3247:
case 3107:
case 2623:
case 2447:
case 246:
case 2612:
case 866:
case 2994:
case 1740:
case 2250:
case 746:
case 3169:
case 3450:
case 2000:
case 942:
case 635:
case 1931:
case 751:
case 2504:
case 3833:
case 4003:
case 4028:
case 3899:
case 2410:
case 675:
case 2689:
case 3629:
case 3746:
case 3655:
case 2850:
case 2615:
case 2917:
case 2731:
case 2581:
case 2331:
case 1020:
case 464:
case 2241:
case 3015:
case 1859:
case 1825:
case 3405:
case 190:
case 677:
case 3343:
case 1490:
case 2029:
case 2397:
case 1485:
case 954:
case 3470:
case 837:
case 3124:
case 2841:
case 1225:
case 230:
case 270:
case 1569:
case 2805:
case 3977:
case 1419:
case 3675:
case 503:
case 4006:
case 1009:
case 1578:
case 202:
case 1122:
case 3989:
case 3516:
case 1755:
case 1646:
case 3466:
case 2266:
case 3077:
case 4091:
case 999:
case 2102:
case 3915:
case 4074:
case 1662:
case 2242:
case 4065:
case 30:
case 2573:
case 3048:
case 3158:
case 2929:
case 2955:
case 125:
case 2866:
case 308:
case 774:
case 3057:
case 3034:
case 2193:
case 682:
case 1287:
case 1375:
case 2139:
case 2576:
case 268:
case 848:
case 3795:
case 2582:
case 2017:
case 1300:
case 316:
case 3147:
case 512:
case 127:
case 2964:
case 3513:
case 329:
case 622:
case 3522:
case 1116:
case 249:
case 1198:
case 971:
case 2263:
case 3761:
case 1932:
case 822:
case 1427:
case 2900:
case 4054:
case 1868:
case 3807:
case 2099:
case 2327:
case 698:
case 1261:
case 424:
case 2641:
case 3194:
case 2670:
case 898:
case 179:
case 3864:
case 139:
case 3636:
case 3768:
case 1707:
case 1038:
case 3963:
case 1625:
case 2400:
case 3140:
case 1861:
case 3200:
case 4013:
case 5:
case 3787:
case 299:
case 3050:
case 3171:
case 2464:
case 1191:
case 1280:
case 3387:
case 3275:
case 543:
case 3855:
case 1540:
case 4016:
case 231:
case 1154:
case 718:
case 3489:
case 3610:
case 2815:
case 3591:
case 3574:
case 3255:
case 2455:
case 45:
case 2429:
case 2111:
case 2889:
case 96:
case 433:
case 2215:
case 458:
case 1679:
case 191:
case 3942:
case 228:
case 2319:
case 526:
case 2344:
case 3970:
case 2936:
case 2877:
case 1990:
case 555:
case 2719:
case 34:
case 3359:
case 2248:
case 2108:
case 3607:
case 816:
case 22:
case 3905:
case 689:
case 3941:
case 3759:
case 3725:
case 288:
case 829:
case 1497:
case 2785:
case 369:
case 662:
case 2385:
case 1586:
case 2790:
case 1919:
case 3183:
case 1572:
case 2848:
case 913:
case 1243:
case 629:
case 2663:
case 1103:
case 862:
case 1128:
case 2910:
case 3379:
case 1938:
case 970:
case 3779:
case 4021:
case 930:
case 3063:
case 1399:
case 992:
case 1027:
case 3172:
case 796:
case 209:
case 2666:
case 557:
case 1106:
case 1246:
case 2857:
case 3503:
case 2999:
case 1552:
case 2007:
case 2338:
case 2417:
case 608:
case 2126:
case 808:
case 254:
case 3434:
case 3457:
case 2257:
case 1846:
case 3626:
case 850:
case 3714:
case 3951:
case 3314:
case 3458:
case 2258:
case 606:
case 554:
case 2023:
case 2911:
case 2737:
case 3142:
case 4020:
case 650:
case 3218:
case 79:
case 3083:
case 3527:
case 2858:
case 4032:
case 1422:
case 1413:
case 1876:
case 1954:
case 798:
case 1937:
case 903:
case 1311:
case 257:
case 3818:
case 1003:
case 3802:
case 2847:
case 286:
case 2774:
case 588:
case 3086:
case 2365:
case 3163:
case 1873:
case 3072:
case 58:
case 219:
case 1991:
case 1092:
case 3893:
case 1856:
case 81:
case 226:
case 346:
case 1965:
case 2107:
case 3608:
case 164:
case 528:
case 255:
case 432:
case 3994:
case 618:
case 490:
case 2026:
case 1273:
case 818:
case 2391:
case 3293:
case 2878:
case 1542:
case 3611:
case 1570:
case 3735:
case 966:
case 2199:
case 729:
case 383:
case 1074:
case 441:
case 2133:
case 400:
case 3094:
case 3335:
case 2392:
case 2306:
case 2869:
case 1505:
case 456:
case 762:
case 2706:
case 1541:
case 2792:
case 1138:
case 863:
case 2110:
case 3519:
case 3986:
case 3544:
case 716:
case 2269:
case 1649:
case 3150:
case 1726:
case 3071:
case 571:
case 1326:
case 1091:
case 1906:
case 2824:
case 3788:
case 70:
case 1144:
case 3388:
case 3767:
case 1054:
case 1037:
case 708:
case 1550:
case 4031:
case 1421:
case 3284:
case 1928:
case 334:
case 1323:
case 3170:
case 2224:
case 1185:
case 3051:
case 487:
case 1281:
case 1190:
case 2579:
case 2908:
case 3105:
case 2912:
case 2445:
case 2303:
case 2328:
case 3201:
case 3141:
case 2401:
case 2694:
case 2984:
case 1701:
case 1345:
case 1428:
case 184:
case 1867:
case 3812:
case 1013:
case 1921:
case 1022:
case 3531:
case 3781:
case 2283:
case 2678:
case 3177:
case 3483:
case 2852:
case 1888:
case 3381:
case 2002:
case 2096:
case 775:
case 1557:
case 2018:
case 3760:
case 1030:
case 3360:
case 651:
case 31:
case 2412:
case 1384:
case 3148:
case 266:
case 3058:
case 851:
case 646:
case 479:
case 2252:
case 1288:
case 3924:
case 318:
case 1673:
case 3157:
case 3134:
case 4085:
case 2426:
case 1548:
case 3696:
case 3618:
case 1676:
case 306:
case 1406:
case 502:
case 2543:
case 4044:
case 3472:
case 1653:
case 2272:
case 3826:
case 1098:
case 3486:
case 1577:
case 737:
case 1235:
case 293:
case 3597:
case 530:
case 3978:
case 1339:
case 2175:
case 1604:
case 592:
case 3373:
case 2164:
case 1491:
case 1916:
case 1998:
case 2271:
case 467:
case 3471:
case 570:
case 1739:
case 2894:
case 2100:
case 1660:
case 2240:
case 1132:
case 203:
case 2993:
case 2398:
case 1681:
case 2871:
case 3356:
case 2840:
case 3494:
case 3601:
case 3756:
case 396:
case 1465:
case 3947:
case 1120:
case 2313:
case 955:
case 2918:
case 2001:
case 2411:
case 3211:
case 883:
case 2722:
case 3353:
case 3958:
case 683:
case 3520:
case 3753:
case 3376:
case 2730:
case 1702:
case 748:
case 2595:
case 1437:
case 1302:
case 1396:
case 2330:
case 1021:
case 986:
case 3811:
case 823:
case 3189:
case 1922:
case 3532:
case 782:
case 3782:
case 623:
case 919:
case 513:
case 2669:
case 1214:
case 1109:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753196401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,];
var gg_b = "1753196401/";

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
