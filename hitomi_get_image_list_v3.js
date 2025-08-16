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
case 2690:
case 3642:
case 18:
case 1751:
case 1424:
case 2550:
case 489:
case 3239:
case 3943:
case 20:
case 796:
case 1462:
case 3392:
case 873:
case 1376:
case 3503:
case 1123:
case 3736:
case 7:
case 1436:
case 603:
case 2235:
case 3734:
case 245:
case 1007:
case 2048:
case 1848:
case 3762:
case 363:
case 2572:
case 630:
case 1426:
case 602:
case 1968:
case 120:
case 1401:
case 2606:
case 2108:
case 621:
case 3983:
case 915:
case 3617:
case 3927:
case 3425:
case 3682:
case 3976:
case 2871:
case 897:
case 444:
case 1693:
case 3375:
case 2120:
case 3798:
case 3659:
case 3019:
case 749:
case 1735:
case 3701:
case 3599:
case 152:
case 2505:
case 2346:
case 707:
case 920:
case 2101:
case 1408:
case 2696:
case 1389:
case 2081:
case 3708:
case 3791:
case 740:
case 3509:
case 1902:
case 4051:
case 279:
case 2878:
case 2344:
case 1430:
case 1352:
case 3302:
case 2162:
case 3013:
case 3653:
case 3593:
case 2985:
case 4035:
case 2423:
case 2600:
case 2386:
case 1699:
case 2433:
case 3032:
case 480:
case 1758:
case 59:
case 676:
case 304:
case 775:
case 2126:
case 3989:
case 2918:
case 1517:
case 2638:
case 2136:
case 115:
case 542:
case 664:
case 1841:
case 3247:
case 3879:
case 693:
case 242:
case 1907:
case 2948:
case 1405:
case 301:
case 3282:
case 2011:
case 2651:
case 2709:
case 2868:
case 692:
case 2508:
case 3421:
case 1068:
case 661:
case 1811:
case 2255:
case 3756:
case 1075:
case 2875:
case 875:
case 3490:
case 1360:
case 2442:
case 29:
case 1319:
case 706:
case 3199:
case 3371:
case 3259:
case 64:
case 1731:
case 1512:
case 3076:
case 2363:
case 1092:
case 1971:
case 3103:
case 1587:
case 1209:
case 807:
case 4028:
case 2459:
case 4038:
case 3919:
case 3629:
case 3404:
case 3960:
case 2314:
case 1704:
case 2316:
case 2635:
case 2167:
case 2417:
case 160:
case 4000:
case 3027:
case 912:
case 3074:
case 677:
case 536:
case 416:
case 1159:
case 2981:
case 1450:
case 2577:
case 888:
case 3772:
case 3253:
case 1364:
case 4021:
case 3193:
case 1313:
case 398:
case 1299:
case 3767:
case 1117:
case 2703:
case 3884:
case 3496:
case 3647:
case 134:
case 1366:
case 1472:
case 2045:
case 3750:
case 1818:
case 3966:
case 3089:
case 772:
case 2658:
case 2156:
case 386:
case 773:
case 1495:
case 1997:
case 2941:
case 884:
case 3438:
case 3070:
case 8:
case 3913:
case 2085:
case 3623:
case 628:
case 3795:
case 2294:
case 2453:
case 3612:
case 3844:
case 4006:
case 1203:
case 781:
case 4055:
case 1529:
case 3932:
case 1142:
case 2310:
case 50:
case 3109:
case 179:
case 65:
case 725:
case 3385:
case 47:
case 2603:
case 2430:
case 414:
case 2129:
case 3747:
case 90:
case 3986:
case 3010:
case 3973:
case 3521:
case 3318:
case 2408:
case 2389:
case 1696:
case 3531:
case 787:
case 2065:
case 1258:
case 252:
case 3125:
case 945:
case 3667:
case 136:
case 2841:
case 215:
case 894:
case 1136:
case 3291:
case 3723:
case 2517:
case 3712:
case 3946:
case 3695:
case 396:
case 1897:
case 3555:
case 3787:
case 886:
case 1918:
case 3345:
case 3733:
case 1384:
case 850:
case 3866:
case 3864:
case 1386:
case 2699:
case 1177:
case 1600:
case 2559:
case 3504:
case 791:
case 3832:
case 762:
case 3220:
case 2349:
case 1985:
case 1412:
case 763:
case 1423:
case 1134:
case 970:
case 682:
case 3158:
case 3016:
case 3596:
case 1911:
case 2968:
case 801:
case 1225:
case 859:
case 2426:
case 512:
case 2007:
case 1048:
case 2383:
case 2436:
case 3201:
case 3605:
case 683:
case 1631:
case 3298:
case 2848:
case 2327:
case 2187:
case 704:
case 3063:
case 2112:
case 2123:
case 2424:
case 2609:
case 1550:
case 2133:
case 2751:
case 28:
case 1690:
case 3594:
case 3014:
case 671:
case 3262:
case 3819:
case 1429:
case 1604:
case 2888:
case 3860:
case 1088:
case 3234:
case 2992:
case 3940:
case 170:
case 3277:
case 667:
case 1871:
case 822:
case 1595:
case 569:
case 555:
case 1655:
case 1251:
case 340:
case 3538:
case 2401:
case 1191:
case 3528:
case 2498:
case 1606:
case 3729:
case 3073:
case 2794:
case 2366:
case 3295:
case 3106:
case 3608:
case 3084:
case 678:
case 3691:
case 3551:
case 810:
case 2965:
case 1536:
case 4009:
case 2117:
case 3341:
case 3403:
case 3630:
case 1200:
case 2322:
case 2299:
case 2978:
case 1577:
case 2450:
case 3086:
case 723:
case 3910:
case 2796:
case 2364:
case 3969:
case 808:
case 3620:
case 2529:
case 58:
case 490:
case 2203:
case 3381:
case 2728:
case 435:
case 759:
case 3190:
case 1310:
case 2738:
case 1085:
case 61:
case 3250:
case 454:
case 1294:
case 3753:
case 3870:
case 2495:
case 804:
case 1105:
case 1941:
case 3535:
case 1501:
case 3267:
case 3889:
case 2061:
case 1799:
case 1018:
case 4093:
case 213:
case 794:
case 3963:
case 372:
case 2153:
case 3662:
case 2731:
case 373:
case 499:
case 627:
case 2454:
case 2721:
case 3388:
case 137:
case 2360:
case 1442:
case 1875:
case 3100:
case 1591:
case 3916:
case 2790:
case 1709:
case 1011:
case 2456:
case 1508:
case 529:
case 3080:
case 2405:
case 1195:
case 3315:
case 381:
case 863:
case 3079:
case 2357:
case 3138:
case 3636:
case 552:
case 3348:
case 825:
case 1915:
case 1167:
case 3256:
case 3883:
case 3558:
case 3698:
case 1231:
case 3205:
case 553:
case 3601:
case 3837:
case 2533:
case 411:
case 1314:
case 3194:
case 1988:
case 33:
case 2587:
case 2755:
case 1363:
case 887:
case 3254:
case 2512:
case 1290:
case 3876:
case 2523:
case 3717:
case 1892:
case 1563:
case 2176:
case 1449:
case 2312:
case 1140:
case 3402:
case 1803:
case 2323:
case 721:
case 2333:
case 3920:
case 3050:
case 3244:
case 1514:
case 1094:
case 547:
case 688:
case 35:
case 1516:
case 3991:
case 3072:
case 2473:
case 533:
case 2484:
case 2896:
case 941:
case 3548:
case 4075:
case 299:
case 1702:
case 1218:
case 2174:
case 684:
case 6:
case 3095:
case 1038:
case 211:
case 1179:
case 2446:
case 3111:
case 1391:
case 696:
case 1180:
case 1308:
case 1489:
case 2828:
case 1899:
case 702:
case 1320:
case 795:
case 2800:
case 1000:
case 157:
case 2143:
case 730:
case 2099:
case 3286:
case 1330:
case 1301:
case 2821:
case 3335:
case 805:
case 1775:
case 4002:
case 2480:
case 3926:
case 2189:
case 3468:
case 1021:
case 3936:
case 3005:
case 1031:
case 2170:
case 2479:
case 141:
case 2607:
case 1146:
case 1648:
case 382:
case 3962:
case 1144:
case 2339:
case 258:
case 2152:
case 434:
case 84:
case 2329:
case 2292:
case 1809:
case 3475:
case 3977:
case 2890:
case 16:
case 3842:
case 1443:
case 455:
case 1569:
case 1510:
case 469:
case 739:
case 2711:
case 1186:
case 1324:
case 1377:
case 2532:
case 412:
case 1476:
case 2275:
case 3774:
case 2440:
case 1362:
case 413:
case 1334:
case 1893:
case 2671:
case 4061:
case 2522:
case 235:
case 1211:
case 2855:
case 1336:
case 1792:
case 551:
case 1055:
case 3882:
case 1615:
case 3817:
case 3776:
case 1925:
case 1427:
case 1006:
case 640:
case 1935:
case 3145:
case 1326:
case 3351:
case 2297:
case 3511:
case 3847:
case 3328:
case 3091:
case 3972:
case 2781:
case 3008:
case 1241:
case 3967:
case 378:
case 1778:
case 2157:
case 209:
case 3338:
case 1579:
case 420:
case 777:
case 3478:
case 1765:
case 2353:
case 2602:
case 3020:
case 2469:
case 3188:
case 1994:
case 2160:
case 2410:
case 1350:
case 792:
case 431:
case 1432:
case 705:
case 761:
case 1900:
case 374:
case 2278:
case 1163:
case 2576:
case 3823:
case 3644:
case 3210:
case 3887:
case 558:
case 3812:
case 1685:
case 956:
case 3995:
case 3646:
case 2583:
case 1938:
case 74:
case 2574:
case 3713:
case 2527:
case 606:
case 1116:
case 2537:
case 2265:
case 4071:
case 2661:
case 839:
case 2549:
case 2113:
case 1707:
case 327:
case 3034:
case 2122:
case 1288:
case 3077:
case 917:
case 2132:
case 672:
case 2164:
case 1990:
case 802:
case 27:
case 3680:
case 2851:
case 3306:
case 4078:
case 895:
case 3545:
case 1051:
case 1611:
case 3905:
case 3679:
case 1931:
case 511:
case 728:
case 3216:
case 1305:
case 180:
case 821:
case 2570:
case 1955:
case 1457:
case 200:
case 599:
case 1025:
case 1906:
case 2788:
case 3719:
case 1035:
case 2835:
case 3098:
case 2589:
case 233:
case 3518:
case 1354:
case 1419:
case 1110:
case 1460:
case 2342:
case 697:
case 12:
case 2552:
case 218:
case 2692:
case 2715:
case 3214:
case 1329:
case 2768:
case 3854:
case 827:
case 2510:
case 2090:
case 3042:
case 4045:
case 2144:
case 1152:
case 158:
case 3578:
case 302:
case 1170:
case 1831:
case 3161:
case 662:
case 3411:
case 3283:
case 2301:
case 1821:
case 3856:
case 2021:
case 2398:
case 1480:
case 885:
case 303:
case 3227:
case 2437:
case 1566:
case 2935:
case 619:
case 2006:
case 2184:
case 2326:
case 1806:
case 2336:
case 2483:
case 3082:
case 3657:
case 589:
case 75:
case 2474:
case 3740:
case 2615:
case 190:
case 2792:
case 2362:
case 1093:
case 3102:
case 1513:
case 1149:
case 548:
case 1522:
case 3939:
case 687:
case 1671:
case 726:
case 1532:
case 3059:
case 2324:
case 2688:
case 1804:
case 517:
case 2004:
case 1261:
case 437:
case 2702:
case 2218:
case 556:
case 1665:
case 610:
case 3270:
case 3786:
case 1896:
case 3445:
case 3872:
case 1745:
case 608:
case 1894:
case 2285:
case 3784:
case 1333:
case 3850:
case 3192:
case 1003:
case 443:
case 1176:
case 2449:
case 368:
case 1323:
case 3485:
case 3571:
case 783:
case 3746:
case 376:
case 3912:
case 1444:
case 81:
case 3923:
case 3053:
case 1800:
case 1099:
case 1560:
case 782:
case 2761:
case 3632:
case 1519:
case 866:
case 2958:
case 2391:
case 1828:
case 364:
case 954:
case 2180:
case 146:
case 111:
case 604:
case 339:
case 935:
case 2038:
case 3895:
case 1317:
case 3197:
case 3448:
case 883:
case 305:
case 951:
case 392:
case 1382:
case 3836:
case 4081:
case 1416:
case 665:
case 1166:
case 601:
case 3714:
case 2573:
case 659:
case 2584:
case 2611:
case 1132:
case 436:
case 1359:
case 766:
case 871:
case 1271:
case 2586:
case 3824:
case 3716:
case 3877:
case 3942:
case 1414:
case 3834:
case 1113:
case 3393:
case 1549:
case 2288:
case 3219:
case 2707:
case 1748:
case 1993:
case 2544:
case 3039:
case 22:
case 3178:
case 3029:
case 2460:
case 2110:
case 147:
case 3488:
case 2035:
case 2248:
case 3561:
case 2906:
case 3637:
case 133:
case 3627:
case 280:
case 132:
case 3917:
case 1825:
case 2305:
case 3683:
case 256:
case 2546:
case 622:
case 1570:
case 2955:
case 2771:
case 3213:
case 698:
case 1160:
case 3820:
case 3222:
case 3399:
case 445:
case 4048:
case 1602:
case 248:
case 289:
case 2778:
case 40:
case 2395:
case 3266:
case 2579:
case 151:
case 826:
case 2645:
case 2580:
case 1265:
case 244:
case 2466:
case 1537:
case 2058:
case 2116:
case 2372:
case 650:
case 1661:
case 900:
case 694:
case 1574:
case 516:
case 541:
case 2938:
case 2540:
case 1576:
case 3303:
case 2281:
case 2685:
case 2422:
case 947:
case 3033:
case 1999:
case 328:
case 2114:
case 2464:
case 2503:
case 4047:
case 175:
case 988:
case 729:
case 66:
case 3690:
case 715:
case 2943:
case 1654:
case 2239:
case 424:
case 30:
case 1596:
case 263:
case 594:
case 1656:
case 3621:
case 2724:
case 3225:
case 1201:
case 3567:
case 586:
case 262:
case 1605:
case 550:
case 2762:
case 3631:
case 428:
case 3015:
case 3595:
case 1857:
case 2617:
case 140:
case 2682:
case 3251:
case 2425:
case 860:
case 3191:
case 2435:
case 1311:
case 3108:
case 3606:
case 2368:
case 2375:
case 1860:
case 1819:
case 3429:
case 3604:
case 3088:
case 1234:
case 2019:
case 2060:
case 3130:
case 753:
case 598:
case 869:
case 1135:
case 855:
case 1973:
case 3945:
case 1984:
case 1521:
case 2720:
case 3505:
case 210:
case 523:
case 1125:
case 3865:
case 2233:
case 1385:
case 2949:
case 493:
case 188:
case 2287:
case 1986:
case 3694:
case 2708:
case 1069:
case 731:
case 2509:
case 1650:
case 1010:
case 2032:
case 3433:
case 3177:
case 1230:
case 3412:
case 657:
case 1822:
case 3985:
case 2952:
case 2022:
case 3638:
case 1291:
case 3136:
case 78:
case 940:
case 3897:
case 3041:
case 501:
case 1787:
case 565:
case 559:
case 1208:
case 2247:
case 196:
case 1946:
case 1695:
case 3373:
case 1506:
case 2066:
case 2458:
case 1733:
case 3126:
case 1151:
case 1866:
case 184:
case 3918:
case 2989:
case 3868:
case 1626:
case 3651:
case 3011:
case 2282:
case 3591:
case 1742:
case 2217:
case 1916:
case 343:
case 3508:
case 3255:
case 468:
case 2421:
case 342:
case 3206:
case 2431:
case 1315:
case 1636:
case 1138:
case 265:
case 1079:
case 820:
case 2371:
case 88:
case 3204:
case 713:
case 172:
case 3520:
case 173:
case 1914:
case 2490:
case 1100:
case 3875:
case 2199:
case 1624:
case 1677:
case 39:
case 3459:
case 3150:
case 755:
case 13:
case 2919:
case 2960:
case 2404:
case 2629:
case 734:
case 2103:
case 1493:
case 1254:
case 1782:
case 2840:
case 3892:
case 3290:
case 1717:
case 1876:
case 1348:
case 906:
case 3417:
case 3167:
case 3625:
case 1256:
case 3793:
case 1883:
case 2957:
case 2455:
case 223:
case 510:
case 2406:
case 3172:
case 222:
case 1558:
case 1601:
case 1759:
case 972:
case 1630:
case 617:
case 2767:
case 3200:
case 1086:
case 587:
case 3577:
case 3981:
case 495:
case 1969:
case 1620:
case 2494:
case 402:
case 1910:
case 852:
case 1608:
case 2647:
case 1106:
case 2750:
case 3045:
case 3536:
case 3228:
case 1155:
case 853:
case 3703:
case 981:
case 1272:
case 3296:
case 2070:
case 2438:
case 3941:
case 591:
case 1525:
case 562:
case 644:
case 2428:
case 3799:
case 294:
case 2966:
case 3658:
case 2089:
case 1381:
case 3154:
case 2932:
case 93:
case 997:
case 4082:
case 2400:
case 3369:
case 1499:
case 2109:
case 1044:
case 2623:
case 1852:
case 3085:
case 421:
case 2612:
case 3453:
case 2795:
case 2922:
case 2378:
case 2844:
case 1869:
case 2747:
case 485:
case 3129:
case 1509:
case 4036:
case 597:
case 1791:
case 3881:
case 2590:
case 3902:
case 2385:
case 3139:
case 3430:
case 3078:
case 108:
case 1730:
case 2531:
case 962:
case 991:
case 3065:
case 3370:
case 2125:
case 2667:
case 110:
case 249:
case 699:
case 1720:
case 2672:
case 4062:
case 2984:
case 3408:
case 2318:
case 104:
case 1458:
case 646:
case 925:
case 329:
case 2866:
case 284:
case 2151:
case 919:
case 581:
case 2695:
case 2946:
case 2712:
case 2208:
case 2787:
case 1970:
case 2555:
case 3349:
case 1593:
case 2220:
case 1302:
case 1653:
case 2813:
case 1022:
case 572:
case 1952:
case 745:
case 3699:
case 1032:
case 3559:
case 2504:
case 2832:
case 3758:
case 2201:
case 3436:
case 1734:
case 3383:
case 2605:
case 3848:
case 506:
case 2158:
case 2656:
case 842:
case 2596:
case 2980:
case 3426:
case 1724:
case 1777:
case 1814:
case 3609:
case 1642:
case 2014:
case 908:
case 3462:
case 2063:
case 3123:
case 3434:
case 89:
case 4091:
case 275:
case 2224:
case 1976:
case 3693:
case 3553:
case 3888:
case 1798:
case 2262:
case 2860:
case 1599:
case 466:
case 207:
case 1701:
case 1937:
case 779:
case 2236:
case 690:
case 2729:
case 1368:
case 904:
case 3147:
case 2857:
case 1983:
case 2739:
case 1425:
case 3815:
case 1617:
case 959:
case 3182:
case 369:
case 3117:
case 3965:
case 3467:
case 4054:
case 3472:
case 2073:
case 651:
case 1496:
case 2106:
case 1647:
case 3366:
case 334:
case 3794:
case 2691:
case 1750:
case 2551:
case 836:
case 2086:
case 3159:
case 3332:
case 3364:
case 3796:
case 1494:
case 507:
case 2104:
case 1886:
case 1772:
case 2969:
case 4005:
case 2403:
case 1193:
case 2630:
case 1049:
case 2849:
case 483:
case 3978:
case 3299:
case 2852:
case 2250:
case 1378:
case 338:
case 743:
case 1612:
case 1052:
case 742:
case 3203:
case 3728:
case 3142:
case 1400:
case 1966:
case 3700:
case 2535:
case 3818:
case 3061:
case 1089:
case 313:
case 3495:
case 2870:
case 2131:
case 312:
case 1846:
case 2272:
case 2046:
case 467:
case 737:
case 1438:
case 1070:
case 150:
case 3075:
case 273:
case 3721:
case 1756:
case 4067:
case 1199:
case 998:
case 426:
case 80:
case 3153:
case 2662:
case 45:
case 3357:
case 101:
case 614:
case 159:
case 4050:
case 67:
case 845:
case 1217:
case 1282:
case 3068:
case 584:
case 3811:
case 2080:
case 3547:
case 3704:
case 2698:
case 2196:
case 600:
case 360:
case 2827:
case 2874:
case 1074:
case 549:
case 123:
case 986:
case 1455:
case 2254:
case 2040:
case 3971:
case 2717:
case 3523:
case 3209:
case 2782:
case 870:
case 618:
case 1629:
case 2194:
case 23:
case 4095:
case 297:
case 3894:
case 2920:
case 1784:
case 3333:
case 3745:
case 2610:
case 848:
case 1850:
case 1252:
case 481:
case 25:
case 3387:
case 3678:
case 2402:
case 4080:
case 3312:
case 817:
case 2930:
case 3183:
case 1507:
case 3261:
case 3665:
case 473:
case 1867:
case 2749:
case 3127:
case 472:
case 3473:
case 2072:
case 2991:
case 3137:
case 889:
case 2246:
case 652:
case 1872:
case 1786:
case 1270:
case 3896:
case 3484:
case 921:
case 3828:
case 1666:
case 615:
case 2515:
case 43:
case 2095:
case 2752:
case 3557:
case 3446:
case 3697:
case 346:
case 1744:
case 1746:
case 1485:
case 1987:
case 2853:
case 2286:
case 527:
case 1613:
case 1923:
case 3718:
case 1175:
case 1249:
case 1933:
case 2588:
case 3519:
case 716:
case 1632:
case 1565:
case 2936:
case 1237:
case 102:
case 620:
case 195:
case 2005:
case 1805:
case 2325:
case 3831:
case 4086:
case 3607:
case 1161:
case 3821:
case 1856:
case 2926:
case 1227:
case 1274:
case 2616:
case 2118:
case 2056:
case 3189:
case 3329:
case 2240:
case 2842:
case 1780:
case 1276:
case 2924:
case 2475:
case 1042:
case 1854:
case 574:
case 2962:
case 68:
case 358:
case 3339:
case 4073:
case 2934:
case 2727:
case 3440:
case 2783:
case 1939:
case 976:
case 1243:
case 3671:
case 4046:
case 1059:
case 267:
case 1929:
case 2737:
case 3564:
case 2859:
case 880:
case 2901:
case 121:
case 2998:
case 2351:
case 1657:
case 335:
case 1082:
case 390:
case 2817:
case 2280:
case 1266:
case 2967:
case 2465:
case 634:
case 961:
case 3157:
case 1710:
case 3297:
case 1769:
case 993:
case 1047:
case 72:
case 0:
case 2673:
case 655:
case 1568:
case 2020:
case 1481:
case 1213:
case 1575:
case 2950:
case 567:
case 1399:
case 2686:
case 3543:
case 1222:
case 3469:
case 756:
case 3410:
case 1820:
case 1171:
case 3903:
case 2478:
case 1649:
case 3353:
case 1303:
case 3576:
case 1012:
case 1652:
case 1592:
case 857:
case 1953:
case 2210:
case 1023:
case 638:
case 2833:
case 21:
case 1689:
case 3537:
case 977:
case 2732:
case 266:
case 3583:
case 2148:
case 2646:
case 1107:
case 2995:
case 582:
case 3527:
case 2713:
case 3574:
case 2954:
case 3359:
case 3132:
case 2024:
case 3164:
case 3414:
case 14:
case 3675:
case 3909:
case 2062:
case 3113:
case 744:
case 86:
case 2034:
case 227:
case 2036:
case 192:
case 161:
case 1197:
case 2905:
case 2407:
case 1448:
case 285:
case 2141:
case 2355:
case 2680:
case 37:
case 3668:
case 3851:
case 2026:
case 816:
case 2956:
case 1257:
case 2760:
case 1898:
case 2719:
case 2321:
case 748:
case 2098:
case 660:
case 526:
case 3825:
case 1674:
case 1627:
case 332:
case 300:
case 3570:
case 2757:
case 2585:
case 1039:
case 2640:
case 3715:
case 928:
case 496:
case 1959:
case 789:
case 55:
case 1488:
case 1309:
case 2829:
case 3342:
case 1185:
case 60:
case 3144:
case 1962:
case 2578:
case 1581:
case 1977:
case 2276:
case 1614:
case 1054:
case 3809:
case 746:
case 3510:
case 711:
case 528:
case 3569:
case 1743:
case 498:
case 926:
case 3301:
case 4049:
case 1616:
case 3021:
case 1926:
case 295:
case 2237:
case 1936:
case 3146:
case 341:
case 230:
case 2805:
case 2082:
case 3211:
case 2017:
case 1776:
case 1280:
case 1817:
case 3427:
case 3925:
case 833:
case 3792:
case 3615:
case 2740:
case 1901:
case 4052:
case 3326:
case 1145:
case 221:
case 1279:
case 2660:
case 3377:
case 3186:
case 167:
case 2619:
case 3004:
case 799:
case 1737:
case 1492:
case 3476:
case 1774:
case 4089:
case 1727:
case 2939:
case 2243:
case 494:
case 1783:
case 3334:
case 3516:
case 1072:
case 3096:
case 851:
case 2270:
case 126:
case 2947:
case 809:
case 1548:
case 1749:
case 3702:
case 3140:
case 2192:
case 1402:
case 3563:
case 3449:
case 1244:
case 1050:
case 465:
case 401:
case 1669:
case 735:
case 15:
case 3094:
case 3514:
case 423:
case 1789:
case 3761:
case 967:
case 3000:
case 1588:
case 2622:
case 2571:
case 2485:
case 2912:
case 2923:
case 3330:
case 2613:
case 3452:
case 1752:
case 592:
case 2744:
case 2895:
case 3470:
case 1284:
case 3958:
case 4076:
case 264:
case 2666:
case 2168:
case 2418:
case 593:
case 3489:
case 3180:
case 3215:
case 1306:
case 2714:
case 1956:
case 3921:
case 3584:
case 1545:
case 293:
case 564:
case 205:
case 2448:
case 3931:
case 643:
case 2763:
case 1141:
case 185:
case 637:
case 69:
case 576:
case 2834:
case 2219:
case 3288:
case 3707:
case 2260:
case 410:
case 858:
case 2942:
case 1304:
case 3990:
case 2824:
case 974:
case 3354:
case 1263:
case 751:
case 1390:
case 2488:
case 2309:
case 1829:
case 3169:
case 709:
case 1471:
case 1757:
case 1839:
case 3544:
case 1214:
case 2676:
case 404:
case 4066:
case 2982:
case 380:
case 2674:
case 3305:
case 2415:
case 2917:
case 2683:
case 3771:
case 966:
case 3955:
case 1719:
case 4022:
case 2561:
case 2637:
case 890:
case 3356:
case 1321:
case 2232:
case 2264:
case 733:
case 1478:
case 2649:
case 2213:
case 1950:
case 2575:
case 732:
case 3994:
case 317:
case 700:
case 1686:
case 1188:
case 2222:
case 2808:
case 2769:
case 1091:
case 1511:
case 3996:
case 3645:
case 3580:
case 2891:
case 718:
case 1008:
case 2047:
case 3778:
case 1115:
case 1465:
case 2266:
case 224:
case 3579:
case 747:
case 3367:
case 1995:
case 2107:
case 1646:
case 2670:
case 1722:
case 4060:
case 1713:
case 530:
case 3938:
case 3618:
case 3372:
case 846:
case 419:
case 228:
case 1394:
case 1766:
case 3464:
case 3114:
case 77:
case 2023:
case 425:
case 1210:
case 1887:
case 1644:
case 3797:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755316802/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,];
var gg_b = "1755316802/";

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
