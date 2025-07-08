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
case 1405:
case 3288:
case 2088:
case 2543:
case 2499:
case 3459:
case 3869:
case 3262:
case 2062:
case 760:
case 1119:
case 2749:
case 3887:
case 2228:
case 2164:
case 1160:
case 3983:
case 1778:
case 1997:
case 2993:
case 825:
case 809:
case 828:
case 3621:
case 853:
case 2651:
case 3691:
case 621:
case 2681:
case 1835:
case 3351:
case 684:
case 1668:
case 3381:
case 3815:
case 3474:
case 1173:
case 3107:
case 598:
case 1652:
case 285:
case 1165:
case 246:
case 288:
case 1682:
case 4031:
case 784:
case 3139:
case 737:
case 198:
case 1142:
case 2834:
case 995:
case 1044:
case 3512:
case 1970:
case 549:
case 3081:
case 2281:
case 661:
case 3645:
case 3904:
case 620:
case 542:
case 2021:
case 3936:
case 2531:
case 2246:
case 974:
case 707:
case 149:
case 761:
case 3662:
case 447:
case 3800:
case 142:
case 2340:
case 2125:
case 1874:
case 1344:
case 949:
case 1415:
case 211:
case 814:
case 3688:
case 1361:
case 3640:
case 86:
case 2702:
case 4043:
case 3999:
case 3398:
case 1508:
case 2816:
case 3328:
case 1963:
case 1457:
case 1194:
case 1867:
case 3180:
case 1487:
case 3493:
case 2190:
case 1282:
case 1092:
case 3549:
case 1252:
case 1916:
case 1859:
case 1022:
case 3117:
case 1124:
case 3805:
case 2120:
case 2661:
case 1999:
case 1398:
case 1772:
case 3975:
case 1435:
case 2166:
case 826:
case 3963:
case 3252:
case 3916:
case 2829:
case 3282:
case 1549:
case 3092:
case 3487:
case 2497:
case 1493:
case 3457:
case 2511:
case 3194:
case 3532:
case 2427:
case 3268:
case 3124:
case 850:
case 1117:
case 3410:
case 663:
case 2899:
case 2222:
case 3469:
case 3022:
case 1645:
case 1051:
case 996:
case 1430:
case 1081:
case 404:
case 1512:
case 2718:
case 1148:
case 196:
case 4001:
case 1155:
case 1662:
case 248:
case 2836:
case 3109:
case 1688:
case 1658:
case 596:
case 2804:
case 672:
case 1800:
case 493:
case 342:
case 1107:
case 182:
case 623:
case 1474:
case 3934:
case 1381:
case 1815:
case 1351:
case 658:
case 2501:
case 655:
case 3571:
case 2976:
case 189:
case 982:
case 3165:
case 1876:
case 1731:
case 582:
case 1346:
case 3518:
case 1139:
case 866:
case 2915:
case 1240:
case 3044:
case 2244:
case 758:
case 589:
case 3830:
case 292:
case 3142:
case 2261:
case 3061:
case 1459:
case 2814:
case 2475:
case 117:
case 3405:
case 412:
case 1288:
case 1467:
case 2883:
case 3893:
case 1262:
case 3711:
case 2957:
case 1983:
case 517:
case 2352:
case 3997:
case 1691:
case 1914:
case 2673:
case 1677:
case 3122:
case 891:
case 294:
case 3534:
case 2013:
case 1396:
case 2168:
case 2224:
case 3024:
case 46:
case 4000:
case 1220:
case 1050:
case 2084:
case 3284:
case 3254:
case 1080:
case 1431:
case 3971:
case 695:
case 1290:
case 2901:
case 2182:
case 3192:
case 2576:
case 537:
case 2152:
case 984:
case 259:
case 3918:
case 795:
case 2066:
case 2770:
case 2642:
case 137:
case 4005:
case 1225:
case 3342:
case 960:
case 3009:
case 3279:
case 465:
case 1146:
case 468:
case 2619:
case 1085:
case 3478:
case 1055:
case 1641:
case 2838:
case 2763:
case 2557:
case 1553:
case 3597:
case 79:
case 3365:
case 1583:
case 560:
case 2587:
case 1656:
case 3843:
case 1789:
case 3373:
case 1307:
case 1759:
case 2432:
case 2569:
case 3037:
case 35:
case 1233:
case 2510:
case 2727:
case 1723:
case 3144:
case 27:
case 363:
case 3769:
case 2447:
case 3710:
case 1443:
case 1811:
case 1529:
case 2849:
case 3787:
case 2379:
case 2797:
case 3309:
case 4057:
case 2265:
case 3065:
case 1348:
case 3684:
case 2911:
case 1472:
case 4010:
case 3337:
case 890:
case 3203:
case 1277:
case 344:
case 1504:
case 3324:
case 956:
case 2637:
case 2500:
case 1286:
case 372:
case 3401:
case 520:
case 1026:
case 561:
case 1536:
case 3394:
case 1350:
case 2384:
case 2418:
case 2219:
case 3019:
case 961:
case 2706:
case 3831:
case 1264:
case 409:
case 3679:
case 425:
case 907:
case 3060:
case 107:
case 749:
case 1730:
case 556:
case 2366:
case 453:
case 1625:
case 812:
case 3256:
case 979:
case 2086:
case 1324:
case 1570:
case 144:
case 1715:
case 2320:
case 2574:
case 3504:
case 3350:
case 356:
case 2931:
case 3026:
case 2226:
case 1679:
case 1776:
case 696:
case 1831:
case 572:
case 3264:
case 2685:
case 3695:
case 3625:
case 361:
case 2158:
case 579:
case 1710:
case 3443:
case 1666:
case 1144:
case 2714:
case 1769:
case 3723:
case 2559:
case 834:
case 2589:
case 451:
case 887:
case 1787:
case 1309:
case 1757:
case 3385:
case 1684:
case 2650:
case 563:
case 2680:
case 2808:
case 4093:
case 3878:
case 1516:
case 1065:
case 2077:
case 3007:
case 4023:
case 1337:
case 2333:
case 1932:
case 2535:
case 1872:
case 267:
case 4059:
case 1342:
case 804:
case 201:
case 1947:
case 4089:
case 2943:
case 3339:
case 3938:
case 55:
case 2095:
case 3295:
case 3664:
case 3146:
case 1009:
case 1365:
case 1597:
case 2626:
case 3553:
case 3048:
case 1411:
case 3151:
case 617:
case 2033:
case 2972:
case 3686:
case 1527:
case 2696:
case 3656:
case 3307:
case 2799:
case 789:
case 2020:
case 4074:
case 1024:
case 555:
case 3017:
case 1534:
case 2386:
case 2530:
case 2818:
case 1506:
case 1254:
case 1971:
case 2250:
case 2341:
case 689:
case 2639:
case 155:
case 1360:
case 158:
case 384:
case 337:
case 230:
case 450:
case 955:
case 1700:
case 123:
case 2704:
case 3751:
case 1966:
case 3824:
case 3540:
case 85:
case 3781:
case 347:
case 1105:
case 3159:
case 2813:
case 1218:
case 993:
case 3894:
case 1850:
case 496:
case 3426:
case 3990:
case 2980:
case 1954:
case 904:
case 3649:
case 3746:
case 2312:
case 2917:
case 104:
case 2456:
case 283:
case 3920:
case 1632:
case 3612:
case 3072:
case 3202:
case 1473:
case 823:
case 2136:
case 216:
case 3809:
case 855:
case 3439:
case 1378:
case 1979:
case 666:
case 2038:
case 2985:
case 2955:
case 3562:
case 3925:
case 3837:
case 1247:
case 1568:
case 2758:
case 3130:
case 2433:
case 1903:
case 3977:
case 2907:
case 519:
case 1582:
case 2049:
case 3249:
case 512:
case 3448:
case 1839:
case 2338:
case 1409:
case 3865:
case 119:
case 4028:
case 3485:
case 919:
case 872:
case 2425:
case 3873:
case 844:
case 1115:
case 241:
case 3135:
case 297:
case 2643:
case 3941:
case 750:
case 3638:
case 3964:
case 534:
case 2546:
case 489:
case 3193:
case 2490:
case 3480:
case 3031:
case 1187:
case 2183:
case 934:
case 3860:
case 2153:
case 1157:
case 1110:
case 2551:
case 650:
case 2740:
case 2581:
case 3123:
case 2420:
case 187:
case 3602:
case 1424:
case 1761:
case 739:
case 2466:
case 66:
case 2856:
case 243:
case 3896:
case 2886:
case 990:
case 3826:
case 1964:
case 2919:
case 2318:
case 1941:
case 3301:
case 2371:
case 1860:
case 2197:
case 1031:
case 3187:
case 3424:
case 3761:
case 1986:
case 280:
case 632:
case 21:
case 3744:
case 2413:
case 3437:
case 1130:
case 2973:
case 1372:
case 820:
case 264:
case 3839:
case 714:
case 2601:
case 2592:
case 1728:
case 2965:
case 2008:
case 319:
case 218:
case 1865:
case 215:
case 856:
case 3115:
case 765:
case 768:
case 2347:
case 312:
case 1873:
case 3807:
case 1545:
case 2332:
case 2937:
case 1933:
case 2170:
case 1407:
case 884:
case 1202:
case 1072:
case 281:
case 4092:
case 591:
case 1809:
case 2895:
case 1995:
case 3792:
case 2782:
case 3848:
case 2909:
case 3979:
case 3722:
case 62:
case 1043:
case 191:
case 2768:
case 3442:
case 1925:
case 2561:
case 3817:
case 474:
case 1159:
case 2820:
case 709:
case 393:
case 728:
case 2175:
case 147:
case 3105:
case 1540:
case 3966:
case 449:
case 2890:
case 702:
case 1894:
case 947:
case 2018:
case 753:
case 625:
case 3271:
case 1426:
case 2201:
case 3954:
case 3632:
case 1920:
case 1496:
case 653:
case 224:
case 3913:
case 1604:
case 1945:
case 966:
case 1533:
case 2600:
case 2537:
case 2027:
case 3227:
case 3898:
case 2858:
case 3742:
case 1093:
case 2097:
case 3828:
case 1131:
case 4065:
case 2862:
case 1739:
case 2452:
case 3492:
case 1595:
case 3579:
case 1035:
case 1389:
case 3773:
case 1707:
case 151:
case 1359:
case 4042:
case 882:
case 566:
case 2845:
case 463:
case 2961:
case 302:
case 222:
case 1796:
case 2605:
case 3675:
case 3566:
case 2215:
case 3015:
case 4060:
case 1629:
case 577:
case 229:
case 309:
case 2108:
case 3178:
case 1726:
case 328:
case 4019:
case 479:
case 3206:
case 3719:
case 2006:
case 1590:
case 3584:
case 3111:
case 2594:
case 2132:
case 2370:
case 3300:
case 444:
case 2524:
case 3513:
case 3234:
case 693:
case 1861:
case 1481:
case 1030:
case 423:
case 3315:
case 2891:
case 3724:
case 526:
case 2713:
case 1143:
case 455:
case 235:
case 1564:
case 1780:
case 1541:
case 787:
case 126:
case 1653:
case 3697:
case 550:
case 1330:
case 3627:
case 926:
case 2200:
case 3000:
case 3270:
case 1614:
case 2766:
case 3503:
case 3634:
case 2327:
case 1323:
case 23:
case 3310:
case 619:
case 1785:
case 3357:
case 2992:
case 2676:
case 3606:
case 3387:
case 2397:
case 2779:
case 3952:
case 3709:
case 3216:
case 368:
case 2118:
case 1229:
case 365:
case 4009:
case 3263:
case 712:
case 3737:
case 2205:
case 3275:
case 2075:
case 262:
case 1822:
case 1059:
case 1299:
case 2725:
case 842:
case 565:
case 3323:
case 271:
case 874:
case 2507:
case 2630:
case 1503:
case 2383:
case 1952:
case 1216:
case 2353:
case 1357:
case 1606:
case 914:
case 1982:
case 2795:
case 3785:
case 3755:
case 1263:
case 3067:
case 4055:
case 2462:
case 514:
case 3892:
case 168:
case 2099:
case 3335:
case 421:
case 965:
case 460:
case 1275:
case 3498:
case 2458:
case 257:
case 437:
case 3717:
case 132:
case 484:
case 3143:
case 1851:
case 1881:
case 2720:
case 1794:
case 3780:
case 2138:
case 790:
case 139:
case 2693:
case 1376:
case 532:
case 3653:
case 1846:
case 4080:
case 3921:
case 2004:
case 1270:
case 16:
case 1000:
case 1627:
case 3586:
case 2102:
case 539:
case 4017:
case 89:
case 3940:
case 1675:
case 153:
case 3796:
case 102:
case 3699:
case 909:
case 2756:
case 3726:
case 902:
case 3629:
case 2667:
case 3446:
case 1584:
case 2550:
case 553:
case 1554:
case 2580:
case 236:
case 3590:
case 1719:
case 1760:
case 3481:
case 2230:
case 270:
case 647:
case 525:
case 1300:
case 2304:
case 1742:
case 4007:
case 1898:
case 3214:
case 1670:
case 2014:
case 12:
case 2674:
case 1492:
case 2548:
case 2293:
case 3093:
case 2083:
case 1828:
case 3131:
case 1087:
case 1765:
case 2928:
case 3367:
case 4039:
case 3962:
case 2555:
case 1305:
case 3958:
case 3389:
case 3035:
case 1773:
case 3707:
case 2399:
case 1329:
case 1928:
case 3509:
case 1555:
case 3363:
case 1585:
case 47:
case 1399:
case 1777:
case 3703:
case 2773:
case 2898:
case 1223:
case 3027:
case 2227:
case 3888:
case 3468:
case 3210:
case 1674:
case 30:
case 2670:
case 1014:
case 3269:
case 2069:
case 2422:
case 3316:
case 2297:
case 1053:
case 2057:
case 1548:
case 1580:
case 1336:
case 3594:
case 2584:
case 1741:
case 2760:
case 2076:
case 1149:
case 3276:
case 478:
case 2719:
case 810:
case 1517:
case 3034:
case 170:
case 1491:
case 1304:
case 3524:
case 3840:
case 2300:
case 253:
case 3605:
case 2675:
case 624:
case 536:
case 3215:
case 2566:
case 433:
case 1689:
case 1756:
case 3961:
case 1786:
case 1659:
case 202:
case 322:
case 305:
case 225:
case 308:
case 329:
case 3108:
case 2846:
case 3657:
case 2376:
case 71:
case 2697:
case 780:
case 1036:
case 4084:
case 3070:
case 3669:
case 906:
case 1274:
case 643:
case 1004:
case 1951:
case 4013:
case 494:
case 1102:
case 1596:
case 1623:
case 2627:
case 3713:
case 3147:
case 232:
case 452:
case 1635:
case 157:
case 3891:
case 1720:
case 2881:
case 2315:
case 506:
case 2461:
case 4066:
case 680:
case 1138:
case 3821:
case 3754:
case 1790:
case 3784:
case 2794:
case 3560:
case 239:
case 338:
case 459:
case 335:
case 3519:
case 268:
case 4079:
case 3118:
case 1029:
case 362:
case 1289:
case 1868:
case 1458:
case 2005:
case 3205:
case 1733:
case 33:
case 1725:
case 1630:
case 2503:
case 1507:
case 1445:
case 3327:
case 171:
case 2982:
case 3397:
case 2216:
case 2387:
case 615:
case 3852:
case 2229:
case 3462:
case 3882:
case 2892:
case 169:
case 2428:
case 53:
case 2067:
case 2498:
case 1205:
case 3733:
case 4025:
case 3488:
case 3868:
case 1615:
case 3458:
case 2089:
case 401:
case 3099:
case 2299:
case 2059:
case 162:
case 371:
case 569:
case 1922:
case 2577:
case 4033:
case 845:
case 3795:
case 2755:
case 848:
case 1397:
case 1676:
case 973:
case 2921:
case 3036:
case 1687:
case 1657:
case 3596:
case 2172:
case 538:
case 2556:
case 3004:
case 3274:
case 813:
case 697:
case 1766:
case 3951:
case 2614:
case 2991:
case 3981:
case 1891:
case 3720:
case 938:
case 357:
case 250:
case 2717:
case 3440:
case 84:
case 2564:
case 1519:
case 1560:
case 138:
case 2541:
case 573:
case 797:
case 2780:
case 3138:
case 1821:
case 3790:
case 3421:
case 3149:
case 1276:
case 3764:
case 1594:
case 3741:
case 336:
case 3580:
case 1524:
case 1840:
case 529:
case 277:
case 4086:
case 2030:
case 508:
case 4056:
case 2861:
case 505:
case 905:
case 3659:
case 427:
case 3786:
case 1961:
case 3756:
case 683:
case 3689:
case 908:
case 929:
case 2446:
case 4041:
case 740:
case 108:
case 129:
case 4064:
case 2367:
case 1363:
case 2595:
case 50:
case 8:
case 1509:
case 3329:
case 616:
case 251:
case 2707:
case 3777:
case 1703:
case 431:
case 2389:
case 2035:
case 1375:
case 1537:
case 2214:
case 3014:
case 2533:
case 1600:
case 2945:
case 3674:
case 892:
case 1027:
case 1888:
case 3223:
case 1257:
case 899:
case 2131:
case 2649:
case 2746:
case 1116:
case 2331:
case 3950:
case 1611:
case 770:
case 2990:
case 1924:
case 4091:
case 383:
case 3312:
case 2189:
case 3199:
case 1561:
case 2751:
case 670:
case 2540:
case 3791:
case 247:
case 1175:
case 340:
case 1544:
case 1820:
case 1163:
case 2894:
case 3721:
case 1890:
case 1678:
case 1018:
case 3441:
case 636:
case 2562:
case 1752:
case 1782:
case 1047:
case 3243:
case 2043:
case 2588:
case 3598:
case 894:
case 1170:
case 3477:
case 2933:
case 1937:
case 852:
case 3272:
case 2072:
case 3002:
case 2809:
case 859:
case 3948:
case 3631:
case 1895:
case 3136:
case 2455:
case 564:
case 878:
case 2865:
case 2485:
case 118:
case 875:
case 3495:
case 1278:
case 3338:
case 3939:
case 671:
case 3803:
case 2873:
case 2842:
case 164:
case 3302:
case 515:
case 1134:
case 2977:
case 3907:
case 2130:
case 518:
case 3788:
case 4045:
case 1601:
case 2448:
case 964:
case 3049:
case 2728:
case 2249:
case 1106:
case 1371:
case 91:
case 1841:
case 3231:
case 2031:
case 1454:
case 2819:
case 488:
case 2193:
case 485:
case 2450:
case 180:
case 1127:
case 3996:
case 3420:
case 2417:
case 3551:
case 3740:
case 11:
case 3581:
case 2591:
case 3643:
case 1919:
case 1318:
case 1960:
case 2941:
case 2638:
case 51:
case 1153:
case 1231:
case 2187:
case 4:
case 3841:
case 2744:
case 2169:
case 3413:
case 1740:
case 1551:
case 831:
case 2761:
case 1012:
case 2424:
case 287:
case 1672:
case 380:
case 1420:
case 3127:
case 673:
case 1643:
case 343:
case 2896:
case 492:
case 735:
case 738:
case 3960:
case 1546:
case 3919:
case 499:
case 1338:
case 762:
case 318:
case 2078:
case 3008:
case 219:
case 315:
case 2618:
case 2807:
case 63:
case 1425:
case 212:
case 3942:
case 141:
case 2115:
case 662:
case 2568:
case 1907:
case 3973:
case 1433:
case 364:
case 3134:
case 827:
case 800:
case 3106:
case 2582:
case 2552:
case 73:
case 669:
case 3211:
case 1762:
case 2671:
case 3909:
case 3308:
case 3752:
case 2979:
case 1955:
case 1985:
case 3768:
case 516:
case 1243:
case 2247:
case 830:
case 1104:
case 3332:
case 1477:
case 2100:
case 916:
case 3825:
case 2855:
case 1136:
case 3895:
case 1879:
case 1980:
case 3071:
case 3201:
case 1950:
case 2984:
case 3994:
case 983:
case 608:
case 3611:
case 3116:
case 324:
case 204:
case 1917:
case 2913:
case 867:
case 1486:
case 183:
case 3924:
case 1866:
case 708:
case 2105:
case 3820:
case 293:
case 705:
case 2817:
case 3561:
case 3018:
case 3678:
case 2608:
case 1721:
case 1464:
case 722:
case 3890:
case 940:
case 2850:
case 1884:
case 486:
case 1639:
case 1736:
case 1871:
case 1341:
case 435:
case 930:
case 2918:
case 2319:
case 1364:
case 352:
case 130:
case 3515:
case 976:
case 3770:
case 654:
case 2700:
case 2024:
case 3168:
case 1412:
case 473:
case 4070:
case 2122:
case 3673:
case 1607:
case 2603:
case 2534:
case 1217:
case 2192:
case 3665:
case 1818:
case 3152:
case 3294:
case 3084:
case 1090:
case 3054:
case 1626:
case 3587:
case 2597:
case 1449:
case 2037:
case 3237:
case 25:
case 1191:
case 3569:
case 3510:
case 2843:
case 3432:
case 2527:
case 1523:
case 3802:
case 1535:
case 1025:
case 3408:
case 1095:
case 1285:
case 4063:
case 1255:
case 3660:
case 2009:
case 3209:
case 967:
case 3079:
case 469:
case 3619:
case 74:
case 2654:
case 3694:
case 1650:
case 2684:
case 2516:
case 897:
case 1617:
case 613:
case 2613:
case 4027:
case 2073:
case 2932:
case 1402:
case 40:
case 2337:
case 2144:
case 2666:
case 64:
case 1140:
case 1325:
case 1589:
case 2042:
case 3242:
case 3727:
case 2757:
case 2908:
case 2309:
case 713:
case 1783:
case 2787:
case 1239:
case 1395:
case 2563:
case 3706:
case 2776:
case 3260:
case 3609:
case 3418:
case 1162:
case 1685:
case 333:
case 127:
case 3313:
case 1296:
case 272:
case 1086:
case 1056:
case 2570:
case 841:
case 2324:
case 3354:
case 2401:
case 3471:
case 645:
case 279:
case 378:
case 4006:
case 1931:
case 686:
case 648:
case 375:
case 2241:
case 3655:
case 1609:
case 2128:
case 575:
case 1734:
case 261:
case 2730:
case 864:
case 300:
case 2633:
case 1500:
case 1637:
case 611:
case 3320:
case 3056:
case 2317:
case 1313:
case 470:
case 975:
case 818:
case 175:
case 815:
case 1471:
case 3226:
case 3931:
case 178:
case 2350:
case 436:
case 2536:
case 2380:
case 3390:
case 3808:
case 2878:
case 2949:
case 4083:
case 1265:
case 2690:
case 3680:
case 3333:
case 2735:
case 3077:
case 1003:
case 2007:
case 1273:
case 331:
case 81:
case 2443:
case 3140:
case 3325:
case 1505:
case 3832:
case 17:
case 3714:
case 2385:
case 97:
case 2355:
case 1978:
case 1797:
case 3438:
case 2767:
case 1763:
case 3121:
case 3626:
case 3593:
case 2553:
case 3248:
case 1557:
case 1432:
case 3696:
case 2686:
case 2759:
case 3377:
case 3799:
case 1303:
case 2789:
case 3847:
case 2656:
case 2151:
case 3033:
case 2233:
case 3191:
case 1569:
case 1775:
case 824:
case 1802:
case 301:
case 221:
case 2664:
case 78:
case 1619:
case 1660:
case 4029:
case 1079:
case 1716:
case 2641:
case 2938:
case 2085:
case 952:
case 159:
case 3736:
case 685:
case 3871:
case 688:
case 903:
case 103:
case 1770:
case 1515:
case 2774:
case 237:
case 330:
case 1642:
case 284:
case 881:
case 457:
case 152:
case 1013:
case 194:
case 2017:
case 3217:
case 2677:
case 3530:
case 1673:
case 1224:
case 3412:
case 4004:
case 503:
case 1054:
case 2080:
case 2431:
case 406:
case 1294:
case 3818:
case 1665:
case 552:
case 1182:
case 994:
case 1416:
case 3993:
case 1352:
case 2983:
case 1987:
case 1382:
case 808:
case 1957:
case 2953:
case 2196:
case 822:
case 3651:
case 1910:
case 2691:
case 3499:
case 441:
case 1732:
case 2869:
case 2459:
case 3298:
case 3543:
case 3058:
case 2258:
case 3897:
case 1883:
case 3749:
case 2028:
case 3228:
case 2887:
case 2467:
case 3646:
case 3141:
case 2262:
case 3062:
case 701:
case 2538:
case 992:
case 2346:
case 199:
case 3806:
case 2876:
case 2731:
case 5:
case 999:
case 776:
case 497:
case 2474:
case 3404:
case 1622:
case 282:
case 3930:
case 599:
case 2107:
case 3177:
case 1470:
case 1103:
case 2351:
case 630:
case 3391:
case 2381:
case 1:
case 346:
case 385:
case 1976:
case 1836:
case 1771:
case 2185:
case 148:
case 186:
case 2662:
case 145:
case 3246:
case 2046:
case 3628:
case 2658:
case 311:
case 2688:
case 3340:
case 986:
case 440:
case 2800:
case 945:
case 1804:
case 483:
case 3133:
case 3091:
case 2291:
case 600:
case 627:
case 545:
case 1434:
case 2148:
case 869:
case 3531:
case 2221:
case 1406:
case 3021:
case 1829:
case 835:
case 94:
case 3863:
case 1184:
case 1511:
case 3190:
case 2180:
case 3738:
case 3483:
case 1068:
case 3345:
case 1427:
case 3120:
case 2805:
case 1222:
case 4002:
case 3414:
case 1899:
case 2117:
case 1747:
case 3358:
case 2772:
case 2398:
case 2999:
case 3989:
case 2640:
case 2435:
case 1644:
case 913:
case 3362:
case 4038:
case 54:
case 2328:
case 1738:
case 1483:
case 3154:
case 2487:
case 2194:
case 2457:
case 3184:
case 3511:
case 1453:
case 2252:
case 2916:
case 2092:
case 3899:
case 67:
case 481:
case 3113:
case 857:
case 2022:
case 1414:
case 1345:
case 1120:
case 2124:
case 3068:
case 2268:
case 3905:
case 3166:
case 1989:
case 1959:
case 1358:
case 77:
case 2508:
case 806:
case 911:
case 4018:
case 678:
case 2701:
case 3836:
case 3771:
case 2344:
case 3804:
case 1340:
case 242:
case 1870:
case 871:
case 1698:
case 111:
case 2415:
case 274:
case 3434:
case 2137:
case 1281:
case 1091:
case 3900:
case 4071:
case 3406:
case 3718:
case 399:
case 298:
case 1806:
case 2830:
case 392:
case 588:
case 443:
case 585:
case 1834:
case 3261:
case 1712:
case 2061:
case 2044:
case 759:
case 3244:
case 1391:
case 652:
case 2668:
case 41:
case 1930:
case 946:
case 3622:
case 3470:
case 3103:
case 2173:
case 2934:
case 988:
case 603:
case 1436:
case 3976:
case 2906:
case 188:
case 2165:
case 185:
case 2652:
case 3501:
case 1993:
case 3708:
case 2778:
case 2997:
case 3987:
case 58:
case 3416:
case 3368:
case 1681:
case 4032:
case 29:
case 1651:
case 1045:
case 2322:
case 1156:
case 1923:
case 2927:
case 1186:
case 1935:
case 1827:
case 1088:
case 3732:
case 3814:
case 1499:
case 2711:
case 1062:
case 1141:
case 2160:
case 1646:
case 910:
case 2893:
case 1897:
case 1228:
case 2119:
case 418:
case 3883:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751943602/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,];
var gg_b = "1751943602/";

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
