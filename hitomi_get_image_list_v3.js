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
case 1591:
case 2403:
case 2678:
case 2914:
case 220:
case 379:
case 1921:
case 3306:
case 2360:
case 1200:
case 2932:
case 1212:
case 2659:
case 2138:
case 3098:
case 2647:
case 2393:
case 1017:
case 1829:
case 3743:
case 1083:
case 3422:
case 4062:
case 2945:
case 859:
case 2628:
case 978:
case 1223:
case 19:
case 1505:
case 142:
case 3401:
case 98:
case 2315:
case 2420:
case 1251:
case 2741:
case 3930:
case 1389:
case 291:
case 417:
case 2344:
case 2316:
case 825:
case 3391:
case 2470:
case 3139:
case 3658:
case 1792:
case 1433:
case 1364:
case 960:
case 147:
case 783:
case 3540:
case 1119:
case 573:
case 321:
case 2588:
case 1775:
case 1506:
case 2452:
case 1910:
case 2776:
case 4088:
case 3335:
case 1185:
case 3923:
case 2251:
case 1420:
case 1315:
case 2761:
case 1204:
case 981:
case 3202:
case 3210:
case 3973:
case 3081:
case 1344:
case 1316:
case 223:
case 3336:
case 1588:
case 2506:
case 2775:
case 3454:
case 2902:
case 3859:
case 3900:
case 2953:
case 236:
case 1542:
case 120:
case 2966:
case 841:
case 3109:
case 3118:
case 599:
case 2234:
case 1914:
case 1678:
case 1932:
case 963:
case 2340:
case 1536:
case 2921:
case 4035:
case 619:
case 552:
case 2667:
case 2200:
case 3755:
case 3790:
case 48:
case 2971:
case 2083:
case 60:
case 3763:
case 4036:
case 3431:
case 3756:
case 1411:
case 2965:
case 3515:
case 1197:
case 4042:
case 3271:
case 1806:
case 2468:
case 3567:
case 1237:
case 433:
case 930:
case 69:
case 753:
case 2983:
case 3840:
case 3358:
case 3217:
case 2065:
case 51:
case 1689:
case 386:
case 1014:
case 3012:
case 1046:
case 509:
case 3786:
case 2066:
case 623:
case 3000:
case 3141:
case 95:
case 647:
case 2194:
case 1032:
case 2328:
case 1190:
case 4058:
case 1999:
case 4079:
case 1718:
case 2002:
case 2835:
case 303:
case 20:
case 2660:
case 426:
case 1367:
case 718:
case 3797:
case 3907:
case 1156:
case 166:
case 2842:
case 1558:
case 1891:
case 3864:
case 731:
case 2378:
case 264:
case 449:
case 1328:
case 201:
case 3030:
case 3815:
case 2155:
case 1835:
case 1010:
case 2529:
case 73:
case 45:
case 2709:
case 777:
case 1002:
case 587:
case 582:
case 1836:
case 2367:
case 1660:
case 10:
case 1347:
case 424:
case 2640:
case 2891:
case 164:
case 3457:
case 3816:
case 266:
case 3844:
case 926:
case 1983:
case 3559:
case 802:
case 2806:
case 1468:
case 3176:
case 3937:
case 2689:
case 1616:
case 2477:
case 2045:
case 951:
case 3578:
case 2664:
case 3175:
case 538:
case 1066:
case 1053:
case 2427:
case 3708:
case 3719:
case 511:
case 3998:
case 2032:
case 807:
case 3635:
case 3893:
case 300:
case 1126:
case 513:
case 4078:
case 1708:
case 2012:
case 2000:
case 3615:
case 3066:
case 75:
case 2329:
case 477:
case 1893:
case 1192:
case 4059:
case 3194:
case 4047:
case 1480:
case 1860:
case 3917:
case 1636:
case 724:
case 1547:
case 2840:
case 1559:
case 3983:
case 3071:
case 2283:
case 1578:
case 184:
case 62:
case 2691:
case 2358:
case 286:
case 248:
case 3644:
case 3065:
case 1176:
case 4028:
case 918:
case 2797:
case 3207:
case 3660:
case 3842:
case 1844:
case 1457:
case 2023:
case 3378:
case 364:
case 931:
case 1449:
case 3143:
case 1815:
case 1030:
case 558:
case 1004:
case 2605:
case 3835:
case 972:
case 3367:
case 1606:
case 2688:
case 950:
case 2457:
case 1864:
case 2449:
case 1484:
case 3862:
case 494:
case 1469:
case 2816:
case 3156:
case 366:
case 1907:
case 1738:
case 510:
case 2815:
case 3155:
case 3190:
case 1073:
case 103:
case 93:
case 2299:
case 977:
case 3718:
case 3427:
case 869:
case 656:
case 2126:
case 3298:
case 2719:
case 3046:
case 1012:
case 3032:
case 1034:
case 2192:
case 775:
case 1141:
case 2635:
case 726:
case 418:
case 2860:
case 3237:
case 3806:
case 2176:
case 1217:
case 1662:
case 2578:
case 1283:
case 1358:
case 3045:
case 1756:
case 1763:
case 2305:
case 2245:
case 3945:
case 2496:
case 822:
case 906:
case 778:
case 1515:
case 3914:
case 2450:
case 2564:
case 334:
case 3403:
case 1118:
case 279:
case 3542:
case 320:
case 1221:
case 1544:
case 827:
case 3360:
case 2472:
case 290:
case 3536:
case 145:
case 843:
case 3659:
case 2098:
case 3932:
case 1934:
case 1081:
case 3344:
case 2930:
case 3741:
case 1210:
case 1202:
case 154:
case 3204:
case 2794:
case 3470:
case 2658:
case 2540:
case 760:
case 2904:
case 983:
case 2867:
case 3230:
case 1454:
case 600:
case 532:
case 1336:
case 3588:
case 537:
case 3185:
case 1951:
case 46:
case 4060:
case 78:
case 684:
case 1923:
case 12:
case 254:
case 571:
case 1391:
case 323:
case 2342:
case 461:
case 2210:
case 1487:
case 3910:
case 293:
case 2336:
case 121:
case 3273:
case 3119:
case 2859:
case 3108:
case 840:
case 3726:
case 1679:
case 347:
case 1629:
case 1401:
case 3776:
case 2593:
case 555:
case 3251:
case 22:
case 406:
case 686:
case 648:
case 2431:
case 2756:
case 3829:
case 96:
case 2763:
case 2265:
case 712:
case 2515:
case 544:
case 2544:
case 2900:
case 1450:
case 1495:
case 2109:
case 245:
case 1098:
case 980:
case 3212:
case 3879:
case 763:
case 2790:
case 3667:
case 483:
case 2755:
case 2266:
case 1306:
case 1472:
case 190:
case 285:
case 3055:
case 3613:
case 443:
case 2652:
case 1872:
case 632:
case 3874:
case 338:
case 3986:
case 3239:
case 2549:
case 1584:
case 815:
case 427:
case 3458:
case 3985:
case 939:
case 2620:
case 1327:
case 1151:
case 774:
case 1896:
case 584:
case 3063:
case 1822:
case 3824:
case 162:
case 67:
case 3707:
case 804:
case 408:
case 2611:
case 646:
case 3145:
case 1801:
case 2025:
case 1624:
case 2076:
case 1112:
case 2580:
case 2854:
case 1887:
case 1918:
case 1674:
case 3672:
case 2075:
case 880:
case 387:
case 1100:
case 2478:
case 3650:
case 741:
case 3577:
case 210:
case 2061:
case 158:
case 3938:
case 1799:
case 3132:
case 1134:
case 759:
case 1428:
case 644:
case 439:
case 1297:
case 792:
case 1076:
case 2801:
case 3631:
case 74:
case 4080:
case 1025:
case 3166:
case 1447:
case 1075:
case 1459:
case 629:
case 2813:
case 2100:
case 1580:
case 440:
case 2467:
case 2887:
case 503:
case 797:
case 2674:
case 1238:
case 2134:
case 1092:
case 3094:
case 1478:
case 1603:
case 3870:
case 861:
case 110:
case 1652:
case 3654:
case 1368:
case 1286:
case 1939:
case 2872:
case 185:
case 1130:
case 2348:
case 267:
case 2895:
case 3803:
case 3110:
case 309:
case 213:
case 2569:
case 3919:
case 4057:
case 3737:
case 908:
case 2327:
case 776:
case 2151:
case 586:
case 3043:
case 1285:
case 2822:
case 655:
case 188:
case 2745:
case 146:
case 1765:
case 3533:
case 998:
case 1263:
case 3684:
case 1440:
case 3848:
case 357:
case 1513:
case 728:
case 1587:
case 1771:
case 2880:
case 3943:
case 1374:
case 3406:
case 3372:
case 1324:
case 3322:
case 1721:
case 370:
case 2181:
case 4013:
case 1501:
case 2493:
case 3405:
case 2746:
case 3019:
case 2311:
case 3008:
case 3396:
case 1766:
case 1255:
case 1753:
case 3301:
case 593:
case 2018:
case 132:
case 2294:
case 4072:
case 1710:
case 1522:
case 1975:
case 4095:
case 271:
case 1596:
case 2941:
case 3730:
case 554:
case 1992:
case 3994:
case 2320:
case 2415:
case 1627:
case 1961:
case 1884:
case 1464:
case 3117:
case 2370:
case 896:
case 368:
case 2416:
case 1869:
case 3183:
case 17:
case 3387:
case 2352:
case 2668:
case 255:
case 914:
case 1976:
case 1648:
case 137:
case 3313:
case 1:
case 2710:
case 405:
case 685:
case 3261:
case 1018:
case 1294:
case 1415:
case 2627:
case 1320:
case 3226:
case 3038:
case 2198:
case 3511:
case 3773:
case 171:
case 1416:
case 1444:
case 3442:
case 2333:
case 3276:
case 1849:
case 2464:
case 853:
case 2976:
case 3097:
case 2137:
case 2648:
case 3680:
case 916:
case 3354:
case 4031:
case 1668:
case 2572:
case 3751:
case 2765:
case 144:
case 3570:
case 831:
case 1243:
case 1745:
case 3085:
case 2587:
case 1554:
case 1460:
case 1880:
case 2374:
case 414:
case 3488:
case 335:
case 3331:
case 2039:
case 1732:
case 3955:
case 610:
case 3712:
case 1714:
case 579:
case 1311:
case 665:
case 270:
case 1990:
case 2322:
case 2405:
case 705:
case 1734:
case 3732:
case 2008:
case 3714:
case 1712:
case 3746:
case 4070:
case 299:
case 1085:
case 3745:
case 2669:
case 3243:
case 2877:
case 2395:
case 2533:
case 2350:
case 257:
case 2848:
case 928:
case 833:
case 135:
case 1488:
case 1868:
case 3460:
case 3880:
case 3370:
case 851:
case 2491:
case 2117:
case 2882:
case 1276:
case 61:
case 3416:
case 1751:
case 3668:
case 1097:
case 714:
case 355:
case 1435:
case 3009:
case 1261:
case 3018:
case 907:
case 173:
case 2241:
case 1275:
case 4003:
case 1773:
case 609:
case 1511:
case 3320:
case 2994:
case 2723:
case 1183:
case 3869:
case 3677:
case 1491:
case 3595:
case 2503:
case 3550:
case 1462:
case 1882:
case 3648:
case 337:
case 2097:
case 4024:
case 2436:
case 2751:
case 1574:
case 3925:
case 2354:
case 824:
case 428:
case 3975:
case 1241:
case 3710:
case 85:
case 2292:
case 332:
case 3926:
case 3961:
case 849:
case 638:
case 2226:
case 3198:
case 3627:
case 1994:
case 1730:
case 1405:
case 2734:
case 3501:
case 152:
case 2199:
case 3039:
case 3721:
case 2990:
case 1322:
case 3324:
case 3753:
case 4033:
case 3766:
case 1008:
case 1019:
case 2086:
case 989:
case 3256:
case 3682:
case 2649:
case 3263:
case 1684:
case 2657:
case 3765:
case 388:
case 1372:
case 402:
case 3771:
case 3513:
case 157:
case 1848:
case 235:
case 1811:
case 11:
case 739:
case 459:
case 974:
case 2824:
case 492:
case 3783:
case 2601:
case 2090:
case 2479:
case 740:
case 3130:
case 2874:
case 1654:
case 3652:
case 1380:
case 1102:
case 1919:
case 3670:
case 2458:
case 109:
case 1803:
case 3557:
case 3238:
case 1568:
case 1852:
case 3854:
case 2114:
case 3459:
case 3447:
case 3075:
case 863:
case 165:
case 2781:
case 310:
case 1349:
case 2833:
case 2695:
case 3603:
case 817:
case 2650:
case 1094:
case 2132:
case 3092:
case 2938:
case 1218:
case 1209:
case 476:
case 2707:
case 3611:
case 812:
case 1631:
case 2997:
case 1165:
case 743:
case 1548:
case 187:
case 2153:
case 2166:
case 3674:
case 519:
case 1146:
case 3467:
case 3887:
case 1114:
case 2852:
case 3134:
case 2094:
case 1938:
case 3799:
case 2209:
case 727:
case 1369:
case 358:
case 2218:
case 1781:
case 699:
case 2349:
case 3041:
case 1833:
case 1650:
case 474:
case 959:
case 1527:
case 4077:
case 1707:
case 4048:
case 992:
case 2165:
case 94:
case 3801:
case 2631:
case 182:
case 3896:
case 4082:
case 2811:
case 3151:
case 21:
case 1985:
case 976:
case 3123:
case 2043:
case 1601:
case 1429:
case 3822:
case 1874:
case 2798:
case 1687:
case 3348:
case 367:
case 1055:
case 1090:
case 111:
case 860:
case 3173:
case 3377:
case 3850:
case 1582:
case 3633:
case 2803:
case 441:
case 925:
case 1986:
case 3569:
case 2908:
case 276:
case 91:
case 3224:
case 2885:
case 174:
case 2231:
case 308:
case 602:
case 2740:
case 482:
case 1760:
case 762:
case 2924:
case 524:
case 3390:
case 3788:
case 2609:
case 3839:
case 2618:
case 487:
case 3356:
case 55:
case 607:
case 3412:
case 1414:
case 1446:
case 549:
case 2466:
case 2453:
case 4090:
case 4055:
case 3233:
case 297:
case 1952:
case 2325:
case 1639:
case 1158:
case 3619:
case 141:
case 1287:
case 1715:
case 1970:
case 1920:
case 322:
case 3069:
case 2789:
case 1744:
case 259:
case 2897:
case 4056:
case 1555:
case 24:
case 1590:
case 3736:
case 3451:
case 292:
case 3987:
case 1410:
case 1325:
case 2952:
case 987:
case 2639:
case 3818:
case 3270:
case 2556:
case 1402:
case 1933:
case 2715:
case 689:
case 836:
case 241:
case 2179:
case 1254:
case 2744:
case 159:
case 2716:
case 2341:
case 3049:
case 1392:
case 3685:
case 2920:
case 41:
case 1361:
case 1326:
case 533:
case 192:
case 3220:
case 2555:
case 14:
case 2590:
case 1375:
case 1594:
case 3592:
case 1885:
case 551:
case 2911:
case 2445:
case 176:
case 3996:
case 339:
case 2222:
case 1471:
case 2296:
case 3128:
case 3575:
case 842:
case 3706:
case 3211:
case 1740:
case 89:
case 3080:
case 465:
case 2295:
case 3203:
case 2432:
case 3178:
case 911:
case 575:
case 1974:
case 1609:
case 3972:
case 1421:
case 340:
case 1886:
case 2808:
case 2027:
case 2414:
case 2903:
case 823:
case 1890:
case 2597:
case 3498:
case 3095:
case 2692:
case 2927:
case 641:
case 2661:
case 746:
case 3248:
case 2977:
case 2011:
case 3319:
case 3308:
case 2538:
case 3437:
case 864:
case 935:
case 1162:
case 3980:
case 80:
case 2625:
case 1417:
case 1968:
case 128:
case 2843:
case 1191:
case 1856:
case 1483:
case 1863:
case 3022:
case 1508:
case 3140:
case 2586:
case 2982:
case 1728:
case 77:
case 2257:
case 2249:
case 102:
case 2318:
case 3539:
case 3655:
case 470:
case 107:
case 560:
case 1747:
case 452:
case 973:
case 4008:
case 1778:
case 2894:
case 2499:
case 499:
case 3841:
case 1033:
case 3984:
case 3160:
case 1982:
case 676:
case 2106:
case 1188:
case 2508:
case 755:
case 3643:
case 202:
case 1318:
case 1309:
case 1249:
case 2284:
case 3876:
case 3826:
case 2747:
case 1052:
case 3054:
case 207:
case 625:
case 3193:
case 4086:
case 1894:
case 3892:
case 771:
case 3481:
case 3861:
case 2890:
case 952:
case 3115:
case 473:
case 305:
case 970:
case 3694:
case 517:
case 1927:
case 801:
case 1011:
case 398:
case 744:
case 3386:
case 1280:
case 512:
case 1977:
case 2856:
case 1676:
case 2483:
case 64:
case 1948:
case 1625:
case 2417:
case 3509:
case 228:
case 3518:
case 2191:
case 3031:
case 988:
case 1386:
case 506:
case 198:
case 2308:
case 3843:
case 1509:
case 2164:
case 2980:
case 3948:
case 2022:
case 3676:
case 2277:
case 1729:
case 2189:
case 1116:
case 4009:
case 2072:
case 3626:
case 803:
case 105:
case 4:
case 1115:
case 2050:
case 2095:
case 3135:
case 471:
case 389:
case 3661:
case 1385:
case 3692:
case 932:
case 2655:
case 3767:
case 773:
case 3052:
case 1826:
case 583:
case 3894:
case 3585:
case 1193:
case 2841:
case 3499:
case 1407:
case 3020:
case 1338:
case 3586:
case 1969:
case 3188:
case 639:
case 886:
case 3982:
case 1984:
case 2957:
case 2282:
case 1876:
case 937:
case 2001:
case 3318:
case 1825:
case 4039:
case 2054:
case 9:
case 2875:
case 695:
case 1655:
case 269:
case 515:
case 971:
case 3728:
case 1949:
case 2984:
case 1957:
case 884:
case 446:
case 3519:
case 1140:
case 1001:
case 1663:
case 3284:
case 1282:
case 1437:
case 622:
case 298:
case 3024:
case 56:
case 3863:
case 1189:
case 1277:
case 3339:
case 757:
case 2509:
case 3968:
case 47:
case 1164:
case 1498:
case 2115:
case 752:
case 929:
case 432:
case 770:
case 2779:
case 1227:
case 2385:
case 2694:
case 627:
case 1095:
case 967:
case 3421:
case 1343:
case 3974:
case 1525:
case 1178:
case 2363:
case 1705:
case 1576:
case 821:
case 295:
case 669:
case 325:
case 1995:
case 1950:
case 709:
case 3453:
case 1638:
case 1159:
case 4092:
case 2274:
case 3886:
case 594:
case 2541:
case 2224:
case 1996:
case 376:
case 1561:
case 208:
case 3465:
case 1592:
case 3594:
case 1080:
case 614:
case 1211:
case 4025:
case 2931:
case 4076:
case 1128:
case 962:
case 3471:
case 1697:
case 2355:
case 1922:
case 2069:
case 1791:
case 698:
case 1762:
case 1394:
case 3392:
case 2084:
case 1049:
case 359:
case 2742:
case 518:
case 34:
case 3897:
case 392:
case 1901:
case 2735:
case 485:
case 1913:
case 3402:
case 1270:
case 1818:
case 243:
case 2954:
case 3410:
case 3254:
case 1430:
case 2473:
case 1686:
case 2619:
case 227:
case 958:
case 1423:
case 1084:
case 3129:
case 3201:
case 3920:
case 2685:
case 2220:
case 550:
case 1451:
case 1736:
case 3590:
case 2809:
case 3639:
case 845:
case 1954:
case 3952:
case 3563:
case 1735:
case 53:
case 467:
case 127:
case 3213:
case 3287:
case 1473:
case 2686:
case 1363:
case 3295:
case 2203:
case 3432:
case 3793:
case 195:
case 2972:
case 985:
case 2525:
case 2178:
case 3027:
case 854:
case 2159:
case 2638:
case 3819:
case 1274:
case 2147:
case 4041:
case 2995:
case 1167:
case 2950:
case 108:
case 3911:
case 82:
case 2592:
case 3222:
case 3445:
case 2996:
case 2575:
case 616:
case 1788:
case 2697:
case 3048:
case 2211:
case 1931:
case 2526:
case 3651:
case 3398:
case 26:
case 2748:
case 3006:
case 598:
case 2777:
case 106:
case 204:
case 312:
case 3845:
case 1113:
case 2507:
case 456:
case 810:
case 1187:
case 1279:
case 2727:
case 3846:
case 3832:
case 1258:
case 505:
case 1439:
case 2610:
case 3133:
case 945:
case 569:
case 1646:
case 723:
case 1978:
case 3612:
case 3600:
case 1537:
case 479:
case 2666:
case 381:
case 954:
case 747:
case 2409:
case 2967:
case 1195:
case 1150:
case 993:
case 1947:
case 653:
case 1598:
case 2671:
case 742:
case 1064:
case 3091:
case 2016:
case 1928:
case 2665:
case 3749:
case 1122:
case 2782:
case 3307:
case 1830:
case 1015:
case 115:
case 3247:
case 2172:
case 956:
case 2646:
case 2614:
case 2632:
case 921:
case 1804:
case 3278:
case 2947:
case 360:
case 1409:
case 1967:
case 3035:
case 3103:
case 2150:
case 3111:
case 2851:
case 516:
case 1671:
case 3497:
case 38:
case 2196:
case 3228:
case 1016:
case 1665:
case 1782:
case 2122:
case 3784:
case 2064:
case 2823:
case 2645:
case 1399:
case 1748:
case 1060:
case 3929:
case 2040:
case 672:
case 16:
case 378:
case 3599:
case 1777:
case 4007:
case 3485:
case 3958:
case 454:
case 1154:
case 3152:
case 2812:
case 2279:
case 979:
case 2187:
case 2113:
case 4081:
case 3853:
case 2800:
case 261:
case 3866:
case 734:
case 493:
case 63:
case 1602:
case 2383:
case 871:
case 2365:
case 1205:
case 1703:
case 2699:
case 3058:
case 1551:
case 2371:
case 3079:
case 683:
case 3463:
case 4051:
case 3883:
case 3334:
case 1332:
case 3456:
case 1169:
case 3988:
case 3029:
case 2321:
case 153:
case 855:
case 2724:
case 3182:
case 3300:
case 1837:
case 351:
case 1573:
case 2366:
case 4023:
case 1346:
case 1314:
case 194:
case 2242:
case 250:
case 3177:
case 3936:
case 3289:
case 333:
case 1534:
case 2476:
case 1683:
case 1291:
case 272:
case 3546:
case 766:
case 1512:
case 3514:
case 2180:
case 3148:
case 1500:
case 448:
case 486:
case 844:
case 3942:
case 2236:
case 2989:
case 131:
case 1944:
case 1441:
case 2881:
case 4000:
case 1770:
case 3935:
case 2475:
case 2047:
case 3351:
case 4034:
case 1752:
case 66:
case 1302:
case 2683:
case 1476:
case 3304:
case 218:
case 3701:
case 3521:
case 2617:
case 1310:
case 2500:
case 3330:
case 1807:
case 2944:
case 522:
case 3991:
case 484:
case 3168:
case 604:
case 1964:
case 2720:
case 2512:
case 2770:
case 1733:
case 3494:
case 1078:
case 527:
case 1475:
case 3571:
case 13:
case 719:
case 2067:
case 543:
case 1426:
case 2523:
case 1699:
case 4030:
case 615:
case 3750:
case 3795:
case 3905:
case 2898:
case 832:
case 35:
case 1371:
case 330:
case 3906:
case 3443:
case 2960:
case 1149:
case 3722:
case 1157:
case 2332:
case 1504:
case 324:
case 1940:
case 2169:
case 986:
case 948:
case 2314:
case 294:
case 3260:
case 3607:
case 1288:
case 2573:
case 196:
case 1366:
case 2731:
case 1502:
case 124:
case 3504:
case 2883:
case 2817:
case 3724:
case 3149:
case 1722:
case 1906:
case 3321:
case 130:
case 784:
case 251:
case 3288:
case 3353:
case 2300:
case 2312:
case 2240:
case 1795:
case 1681:
case 3699:
case 2058:
case 2455:
case 2079:
case 15:
case 3774:
case 4002:
case 4010:
case 419:
case 2545:
case 901:
case 3078:
case 3235:
case 4066:
case 541:
case 899:
case 3881:
case 4053:
case 4021:
case 2935:
case 2754:
case 33:
case 1571:
case 2351:
case 3310:
case 3425:
case 857:
case 350:
case 2177:
case 2936:
case 2289:
case 1521:
case 1701:
case 1962:
case 966:
case 2546:
case 1168:
case 1566:
case 3236:
case 1330:
case 1553:
case 3807:
case 2637:
case 2148:
case 3915:
case 4046:
case 4014:
case 1323:
case 3752:
case 1754:
case 703:
case 597:
case 2787:
case 2571:
case 1127:
case 663:
case 1935:
case 2215:
case 318:
case 3683:
case 1264:
case 3262:
case 2304:
case 133:
case 90:
case 2216:
case 835:
case 1936:
case 1177:
case 2566:
case 964:
case 1637:
case 2330:
case 2553:
case 3500:
case 1514:
case 3512:
case 1546:
case 2168:
case 2991:
case 612:
case 1817:
case 3960:
case 3184:
case 2510:
case 2722:
case 1182:
case 230:
case 1988:
case 1029:
case 3169:
case 1463:
case 1883:
case 3314:
case 394:
case 748:
case 786:
case 3346:
case 3711:
case 3206:
case 151:
case 2607:
case 1300:
case 3837:
case 3345:
case 525:
case 401:
case 3703:
case 3205:
case 681:
case 175:
case 3993:
case 25:
case 2772:
case 2673:
case 1486:
case 1866:
case 217:
case 491:
case 3727:
case 2846:
case 1152:
case 2814:
case 887:
case 3610:
case 1170:
case 1871:
case 36:
case 2780:
case 2651:
case 2398:
case 1088:
case 2006:
case 1865:
case 3777:
case 212:
case 2845:
case 2623:
case 1228:
case 630:
case 18:
case 3671:
case 942:
case 3131:
case 2062:
case 3782:
case 2124:
case 3665:
case 2757:
case 1381:
case 3044:
case 72:
case 1042:
case 3016:
case 2612:
case 1247:
case 838:
case 3666:
case 1438:
case 2267:
case 420:
case 1307:
case 3967:
case 1035:
case 1103:
case 3418:
case 3409:
case 3621:
case 1278:
case 2634:
case 3804:
case 65:
case 28:
case 2497:
case 3598:
case 4083:
case 3851:
case 2111:
case 3196:
case 4017:
case 2228:
case 1124:
case 3122:
case 2784:
case 1757:
case 2381:
case 3928:
case 1091:
case 2769:
case 1062:
case 3064:
case 436:
case 2307:
case 1600:
case 1612:
case 3646:
case 3172:
case 3947:
case 3959:
case 721:
case 1634:
case 3195:
case 2035:
case 675:
case 1846:
case 920:
case 3812:
case 589:
case 1419:
case 1408:
case 1673:
case 2866:
case 1337:
case 3800:
case 2630:
case 117:
case 2853:
case 3113:
case 1133:
case 1005:
case 3317:
case 865:
case 3258:
case 3834:
case 2604:
case 1832:
case 2088:
case 633:
case 2871:
case 1651:
case 3040:
case 2599:
case 278:
case 1845:
case 112:
case 2485:
case 2865:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758438002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,];
var gg_b = "1758438002/";

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
