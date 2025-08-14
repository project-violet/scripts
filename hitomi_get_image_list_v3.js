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
case 3829:
case 1373:
case 1870:
case 1207:
case 99:
case 826:
case 3828:
case 3340:
case 3334:
case 932:
case 1482:
case 1653:
case 2005:
case 395:
case 2234:
case 2240:
case 1012:
case 2199:
case 3888:
case 2198:
case 3889:
case 3366:
case 2051:
case 1457:
case 1753:
case 2994:
case 3381:
case 3816:
case 233:
case 2091:
case 2281:
case 1793:
case 2954:
case 2485:
case 2266:
case 2200:
case 2224:
case 2905:
case 1376:
case 2575:
case 1656:
case 2435:
case 3846:
case 527:
case 1912:
case 933:
case 2045:
case 328:
case 309:
case 232:
case 765:
case 2951:
case 2094:
case 1042:
case 2915:
case 2210:
case 1756:
case 1572:
case 1796:
case 3310:
case 3813:
case 2490:
case 1902:
case 689:
case 2991:
case 2263:
case 322:
case 769:
case 3384:
case 3172:
case 2878:
case 136:
case 795:
case 1236:
case 26:
case 2371:
case 50:
case 4021:
case 4040:
case 3535:
case 1602:
case 181:
case 1249:
case 3837:
case 927:
case 799:
case 3475:
case 533:
case 1135:
case 723:
case 1053:
case 2751:
case 2715:
case 2791:
case 1150:
case 1612:
case 4066:
case 656:
case 3525:
case 4000:
case 1208:
case 4031:
case 4024:
case 59:
case 439:
case 3274:
case 1209:
case 705:
case 375:
case 2462:
case 1233:
case 617:
case 2654:
case 2745:
case 709:
case 728:
case 1226:
case 435:
case 96:
case 1219:
case 538:
case 365:
case 1458:
case 1218:
case 1459:
case 722:
case 477:
case 2754:
case 1993:
case 2645:
case 2122:
case 1096:
case 227:
case 1286:
case 143:
case 3257:
case 3638:
case 2561:
case 3222:
case 1896:
case 4072:
case 3713:
case 3639:
case 679:
case 317:
case 3417:
case 157:
case 1385:
case 518:
case 104:
case 3760:
case 852:
case 2677:
case 2357:
case 2518:
case 3297:
case 1856:
case 3087:
case 2519:
case 3739:
case 3613:
case 789:
case 2526:
case 637:
case 2509:
case 2473:
case 2979:
case 785:
case 3027:
case 3746:
case 2174:
case 2382:
case 100:
case 853:
case 1893:
case 1390:
case 3606:
case 2332:
case 847:
case 3232:
case 142:
case 3987:
case 3789:
case 1853:
case 1350:
case 194:
case 2549:
case 116:
case 3616:
case 356:
case 2523:
case 101:
case 2171:
case 3706:
case 1770:
case 58:
case 148:
case 3728:
case 3952:
case 2536:
case 2272:
case 717:
case 1563:
case 3692:
case 3787:
case 3110:
case 1842:
case 3060:
case 3184:
case 2845:
case 3436:
case 3003:
case 1176:
case 3792:
case 3906:
case 622:
case 3423:
case 3752:
case 1531:
case 3687:
case 1500:
case 164:
case 913:
case 3448:
case 3131:
case 385:
case 3449:
case 1471:
case 2399:
case 3419:
case 3258:
case 2398:
case 3913:
case 3166:
case 2365:
case 3181:
case 2679:
case 3960:
case 213:
case 3265:
case 2678:
case 2851:
case 2358:
case 695:
case 3299:
case 2359:
case 3461:
case 3088:
case 3939:
case 3006:
case 171:
case 3938:
case 1540:
case 1521:
case 3433:
case 3140:
case 912:
case 1812:
case 3408:
case 3573:
case 3426:
case 2977:
case 2778:
case 2507:
case 1362:
case 1070:
case 3946:
case 4025:
case 1928:
case 1727:
case 3531:
case 1423:
case 953:
case 2669:
case 3970:
case 947:
case 1449:
case 1100:
case 1131:
case 1448:
case 1124:
case 1436:
case 189:
case 1906:
case 791:
case 1576:
case 1038:
case 2147:
case 3842:
case 2769:
case 1652:
case 1627:
case 2967:
case 2768:
case 1060:
case 1916:
case 757:
case 2601:
case 2644:
case 1464:
case 1692:
case 252:
case 743:
case 2711:
case 431:
case 2720:
case 1043:
case 2741:
case 1426:
case 748:
case 2614:
case 2262:
case 3534:
case 701:
case 1737:
case 371:
case 1939:
case 486:
case 1409:
case 716:
case 3474:
case 1408:
case 360:
case 1140:
case 1903:
case 1486:
case 794:
case 247:
case 2117:
case 2641:
case 1265:
case 2620:
case 253:
case 2714:
case 1299:
case 430:
case 1089:
case 1913:
case 1418:
case 3802:
case 1637:
case 1419:
case 1016:
case 370:
case 2904:
case 2133:
case 1660:
case 764:
case 2109:
case 1746:
case 818:
case 2440:
case 1052:
case 2108:
case 2434:
case 2126:
case 552:
case 846:
case 2030:
case 774:
case 1760:
case 2980:
case 2285:
case 2481:
case 3856:
case 1297:
case 1646:
case 1417:
case 117:
case 1713:
case 3896:
case 1638:
case 343:
case 3385:
case 357:
case 1688:
case 1728:
case 348:
case 553:
case 3770:
case 2136:
case 3335:
case 1447:
case 1743:
case 1616:
case 2944:
case 2235:
case 2901:
case 760:
case 301:
case 680:
case 1037:
case 156:
case 2969:
case 1788:
case 2968:
case 636:
case 1232:
case 2463:
case 2995:
case 1643:
case 2080:
case 394:
case 3350:
case 88:
case 3893:
case 681:
case 2955:
case 1716:
case 2911:
case 1606:
case 813:
case 3702:
case 616:
case 3996:
case 3612:
case 380:
case 2364:
case 601:
case 3150:
case 3283:
case 3093:
case 80:
case 3190:
case 3264:
case 2383:
case 2880:
case 3956:
case 2814:
case 1271:
case 3249:
case 3602:
case 476:
case 2336:
case 3248:
case 4073:
case 2323:
case 2841:
case 336:
case 694:
case 3236:
case 3498:
case 2557:
case 169:
case 2522:
case 3261:
case 89:
case 926:
case 2319:
case 2855:
case 3096:
case 1887:
case 2597:
case 3185:
case 165:
case 3219:
case 3953:
case 2801:
case 643:
case 2830:
case 179:
case 4076:
case 657:
case 690:
case 3226:
case 1827:
case 3208:
case 1525:
case 3233:
case 175:
case 87:
case 780:
case 2317:
case 671:
case 526:
case 3002:
case 1366:
case 2565:
case 3942:
case 1888:
case 2867:
case 3217:
case 2599:
case 2598:
case 3457:
case 3012:
case 199:
case 661:
case 3693:
case 406:
case 3207:
case 195:
case 1334:
case 1321:
case 1843:
case 1340:
case 1813:
case 1310:
case 3796:
case 3572:
case 122:
case 3432:
case 784:
case 1860:
case 1363:
case 414:
case 1838:
case 3696:
case 3247:
case 1839:
case 496:
case 109:
case 2276:
case 1300:
case 1803:
case 1324:
case 1331:
case 105:
case 1846:
case 2175:
case 674:
case 3307:
case 3273:
case 1945:
case 4048:
case 1221:
case 1240:
case 726:
case 653:
case 4036:
case 2653:
case 2482:
case 1005:
case 2870:
case 2373:
case 1485:
case 2002:
case 1091:
case 1281:
case 536:
case 1051:
case 2753:
case 3599:
case 2217:
case 1015:
case 1199:
case 2942:
case 3276:
case 2696:
case 2656:
case 3175:
case 879:
case 4033:
case 1877:
case 1200:
case 4009:
case 1575:
case 2432:
case 1263:
case 837:
case 4086:
case 2796:
case 1490:
case 4061:
case 1450:
case 2042:
case 1915:
case 869:
case 19:
case 1210:
case 1284:
case 2712:
case 1691:
case 2135:
case 3336:
case 281:
case 2249:
case 1615:
case 16:
case 2236:
case 1371:
case 3349:
case 4007:
case 1651:
case 1705:
case 1878:
case 236:
case 3323:
case 2150:
case 17:
case 3472:
case 2956:
case 1715:
case 3880:
case 2053:
case 1751:
case 2190:
case 2264:
case 3308:
case 3309:
case 3582:
case 4047:
case 1745:
case 3844:
case 1462:
case 1694:
case 2642:
case 809:
case 828:
case 2209:
case 2465:
case 127:
case 3855:
case 1754:
case 3318:
case 1794:
case 2458:
case 2218:
case 2459:
case 3868:
case 822:
case 2056:
case 3869:
case 3386:
case 1197:
case 1322:
case 1357:
case 3095:
case 3980:
case 3466:
case 3118:
case 1586:
case 2385:
case 916:
case 290:
case 3055:
case 2896:
case 752:
case 901:
case 3011:
case 889:
case 4075:
case 1777:
case 574:
case 1473:
case 1508:
case 3225:
case 994:
case 3904:
case 3941:
case 3044:
case 3001:
case 1526:
case 291:
case 3126:
case 885:
case 2350:
case 294:
case 3164:
case 3290:
case 747:
case 3080:
case 1564:
case 242:
case 3014:
case 753:
case 2670:
case 626:
case 991:
case 3911:
case 3484:
case 3250:
case 200:
case 3955:
case 3410:
case 2893:
case 3020:
case 3041:
case 4:
case 2335:
case 3136:
case 2770:
case 248:
case 1523:
case 3431:
case 943:
case 1171:
case 957:
case 216:
case 3235:
case 990:
case 3123:
case 1548:
case 3930:
case 1894:
case 3795:
case 817:
case 274:
case 424:
case 3768:
case 3769:
case 591:
case 2563:
case 3644:
case 3755:
case 1854:
case 1272:
case 264:
case 3695:
case 1077:
case 2471:
case 3669:
case 2531:
case 3147:
case 358:
case 543:
case 590:
case 3730:
case 2176:
case 3701:
case 970:
case 548:
case 1358:
case 3714:
case 1359:
case 18:
case 1815:
case 3780:
case 3641:
case 3604:
case 964:
case 347:
case 270:
case 2581:
case 501:
case 1399:
case 420:
case 2802:
case 261:
case 2362:
case 1805:
case 856:
case 3741:
case 3704:
case 1779:
case 3720:
case 1507:
case 260:
case 445:
case 2474:
case 500:
case 2173:
case 271:
case 2540:
case 3262:
case 1611:
case 2906:
case 517:
case 1375:
case 1147:
case 2792:
case 1744:
case 1701:
case 4082:
case 3547:
case 2003:
case 2436:
case 3077:
case 2449:
case 2100:
case 2124:
case 69:
case 2448:
case 2928:
case 346:
case 632:
case 2423:
case 2752:
case 2046:
case 2929:
case 2013:
case 1711:
case 3272:
case 3854:
case 4022:
case 1630:
case 1755:
case 312:
case 2372:
case 1795:
case 2060:
case 2989:
case 1769:
case 2988:
case 2787:
case 857:
case 2627:
case 2409:
case 2134:
case 2408:
case 1262:
case 2433:
case 2938:
case 2737:
case 633:
case 2029:
case 2946:
case 816:
case 3507:
case 1680:
case 1741:
case 3778:
case 3977:
case 2426:
case 3805:
case 3891:
case 989:
case 3365:
case 842:
case 2259:
case 894:
case 556:
case 3398:
case 2258:
case 2419:
case 153:
case 3815:
case 3359:
case 2088:
case 1067:
case 2461:
case 2089:
case 985:
case 2486:
case 1117:
case 147:
case 3678:
case 1604:
case 4032:
case 1620:
case 2960:
case 1780:
case 3679:
case 3526:
case 1030:
case 627:
case 2703:
case 2092:
case 2937:
case 2739:
case 2613:
case 3174:
case 746:
case 2746:
case 1109:
case 1108:
case 1421:
case 1941:
case 1225:
case 2660:
case 3508:
case 3473:
case 3978:
case 1055:
case 712:
case 3586:
case 2417:
case 482:
case 1186:
case 2639:
case 2222:
case 956:
case 2638:
case 1481:
case 1068:
case 3357:
case 3518:
case 3322:
case 1466:
case 585:
case 1285:
case 2706:
case 917:
case 2992:
case 1424:
case 1431:
case 2037:
case 3523:
case 1148:
case 256:
case 1400:
case 1930:
case 2616:
case 3548:
case 1123:
case 1235:
case 1944:
case 1041:
case 1004:
case 67:
case 1020:
case 871:
case 2743:
case 2927:
case 2728:
case 1667:
case 2689:
case 2729:
case 1484:
case 3332:
case 4059:
case 1410:
case 1955:
case 2716:
case 1080:
case 1995:
case 1290:
case 1164:
case 713:
case 870:
case 2789:
case 1969:
case 483:
case 2628:
case 2987:
case 2788:
case 3564:
case 1472:
case 37:
case 1814:
case 3132:
case 403:
case 3605:
case 1532:
case 3751:
case 1880:
case 1364:
case 979:
case 937:
case 1348:
case 3615:
case 1323:
case 1820:
case 523:
case 1841:
case 1804:
case 3705:
case 969:
case 3691:
case 2837:
case 2535:
case 498:
case 1895:
case 732:
case 1597:
case 2585:
case 1869:
case 493:
case 2887:
case 327:
case 3157:
case 402:
case 1811:
case 3122:
case 1557:
case 269:
case 1522:
case 509:
case 738:
case 441:
case 2274:
case 425:
case 2525:
case 1309:
case 408:
case 2892:
case 1801:
case 1830:
case 3654:
case 279:
case 1599:
case 3051:
case 3165:
case 2889:
case 77:
case 2366:
case 880:
case 1565:
case 2888:
case 1867:
case 30:
case 3199:
case 3266:
case 3954:
case 1558:
case 1317:
case 333:
case 2816:
case 1559:
case 3005:
case 2321:
case 68:
case 2334:
case 2340:
case 2843:
case 881:
case 2828:
case 613:
case 463:
case 76:
case 2806:
case 836:
case 3425:
case 1307:
case 4071:
case 2562:
case 39:
case 3450:
case 3951:
case 995:
case 2860:
case 332:
case 2384:
case 2172:
case 579:
case 3054:
case 999:
case 3263:
case 727:
case 468:
case 2310:
case 472:
case 618:
case 3435:
case 2846:
case 1175:
case 537:
case 1347:
case 3575:
case 565:
case 338:
case 4074:
case 1276:
case 209:
case 228:
case 569:
case 612:
case 2839:
case 462:
case 3657:
case 3238:
case 3622:
case 3782:
case 1545:
case 602:
case 3239:
case 388:
case 3377:
case 3203:
case 215:
case 2824:
case 2831:
case 2277:
case 2800:
case 2303:
case 1075:
case 693:
case 3246:
case 2338:
case 3697:
case 2339:
case 629:
case 608:
case 3959:
case 3453:
case 3682:
case 3154:
case 382:
case 2072:
case 2360:
case 2884:
case 2542:
case 3493:
case 834:
case 2313:
case 2810:
case 3998:
case 625:
case 3999:
case 2840:
case 63:
case 2512:
case 3632:
case 4079:
case 1505:
case 3228:
case 2306:
case 4078:
case 1807:
case 1270:
case 3229:
case 3105:
case 2881:
case 2972:
case 2502:
case 919:
case 1591:
case 2866:
case 3058:
case 3059:
case 2388:
case 31:
case 3289:
case 3115:
case 1551:
case 1817:
case 3151:
case 3065:
case 15:
case 2316:
case 2672:
case 855:
case 418:
case 3292:
case 3412:
case 2392:
case 4077:
case 1775:
case 1833:
case 1330:
case 859:
case 446:
case 1395:
case 519:
case 2596:
case 2772:
case 1861:
case 1369:
case 1886:
case 3022:
case 2387:
case 678:
case 662:
case 1675:
case 3402:
case 515:
case 1819:
case 987:
case 3982:
case 3658:
case 1849:
case 121:
case 3659:
case 1304:
case 1341:
case 1320:
case 1823:
case 3378:
case 2279:
case 2278:
case 3759:
case 3758:
case 3957:
case 2593:
case 3922:
case 1380:
case 1864:
case 783:
case 48:
case 3798:
case 3997:
case 2553:
case 71:
case 3799:
case 1607:
case 4051:
case 866:
case 3832:
case 4015:
case 1413:
case 40:
case 1180:
case 1064:
case 1961:
case 2621:
case 2634:
case 2640:
case 1083:
case 297:
case 433:
case 744:
case 73:
case 1460:
case 4091:
case 3974:
case 876:
case 1909:
case 1403:
case 3504:
case 1579:
case 52:
case 4005:
case 1438:
case 363:
case 1104:
case 3179:
case 1933:
case 1439:
case 798:
case 2740:
case 2721:
case 2137:
case 2666:
case 1926:
case 1964:
case 2624:
case 3569:
case 793:
case 3897:
case 1168:
case 1416:
case 4094:
case 4054:
case 1111:
case 207:
case 1296:
case 3857:
case 1489:
case 3511:
case 702:
case 951:
case 1488:
case 1061:
case 2467:
case 535:
case 368:
case 1155:
case 2763:
case 1983:
case 725:
case 2731:
case 2684:
case 2724:
case 2700:
case 1033:
case 2152:
case 2127:
case 1008:
case 3074:
case 2610:
case 438:
case 1949:
case 997:
case 3882:
case 1948:
case 1443:
case 3544:
case 2663:
case 1101:
case 362:
case 378:
case 1429:
case 1764:
case 2251:
case 2411:
case 2215:
case 2189:
case 810:
case 22:
case 3899:
case 33:
case 1202:
case 2066:
case 3858:
case 935:
case 2469:
case 1623:
case 2081:
case 1487:
case 2570:
case 2143:
case 811:
case 2900:
case 2205:
case 2924:
case 61:
case 1492:
case 2444:
case 2129:
case 1736:
case 806:
case 977:
case 2106:
case 597:
case 1947:
case 398:
case 1427:
case 1452:
case 1212:
case 1242:
case 340:
case 3674:
case 2010:
case 3354:
case 1718:
case 393:
case 2084:
case 1719:
case 1633:
case 2063:
case 2254:
case 1761:
case 3394:
case 427:
case 772:
case 768:
case 2113:
case 2966:
case 688:
case 2480:
case 1709:
case 2146:
case 92:
case 554:
case 3774:
case 1708:
case 1733:
case 2000:
case 2031:
case 1618:
case 239:
case 341:
case 3345:
case 235:
case 778:
case 308:
case 2245:
case 2103:
case 2940:
case 1047:
case 2139:
case 1686:
case 426:
case 3748:
case 2073:
case 1771:
case 1305:
case 2976:
case 3683:
case 3427:
case 2312:
case 3492:
case 3664:
case 2529:
case 3736:
case 65:
case 851:
case 1671:
case 1858:
case 3202:
case 1315:
case 13:
case 2516:
case 3487:
case 506:
case 850:
case 1391:
case 2589:
case 897:
case 103:
case 3764:
case 3167:
case 1899:
case 3661:
case 2973:
case 3686:
case 3726:
case 2503:
case 3907:
case 3577:
case 141:
case 3619:
case 2513:
case 1394:
case 3761:
case 2342:
case 3786:
case 3626:
case 1674:
case 3608:
case 3242:
case 3719:
case 3917:
case 3718:
case 1354:
case 206:
case 3023:
case 566:
case 3446:
case 2477:
case 211:
case 3926:
case 620:
case 3048:
case 3908:
case 1504:
case 1541:
case 3036:
case 3617:
case 3439:
case 1179:
case 914:
case 3104:
case 3438:
case 2850:
case 576:
case 3083:
case 3293:
case 996:
case 210:
case 3986:
case 1832:
case 3607:
case 1580:
case 3064:
case 173:
case 3253:
case 3919:
case 2890:
case 1514:
case 649:
case 1501:
case 3443:
case 839:
case 3747:
case 1530:
case 3026:
case 296:
case 910:
case 3144:
case 3923:
case 3130:
case 2776:
case 867:
case 3033:
case 2825:
case 624:
case 1074:
case 3086:
case 1822:
case 911:
case 2676:
case 168:
case 3155:
case 906:
case 3488:
case 1511:
case 2885:
case 1569:
case 214:
case 2587:
case 3019:
case 3195:
case 877:
case 1568:
case 1595:
case 1897:
case 3256:
case 1287:
case 2268:
case 3311:
case 1932:
case 1097:
case 2269:
case 2156:
case 3675:
case 3819:
case 3355:
case 3818:
case 2990:
case 324:
case 2085:
case 234:
case 2415:
case 3395:
case 2211:
case 3368:
case 3886:
case 3369:
case 2451:
case 1057:
case 3808:
case 3809:
case 1227:
case 930:
case 3344:
case 3330:
case 458:
case 2201:
case 2244:
case 2935:
case 1292:
case 815:
case 453:
case 75:
case 2153:
case 1765:
case 3864:
case 447:
case 2214:
case 1799:
case 2454:
case 1032:
case 1922:
case 2494:
case 3314:
case 1957:
case 1759:
case 2193:
case 2050:
case 2241:
case 2220:
case 349:
case 2445:
case 3836:
case 1699:
case 3848:
case 1659:
case 1658:
case 1237:
case 2762:
case 3320:
case 3304:
case 1965:
case 4068:
case 1194:
case 1260:
case 4069:
case 887:
case 1797:
case 4095:
case 2142:
case 3594:
case 4055:
case 1959:
case 1213:
case 4011:
case 182:
case 1154:
case 1697:
case 1239:
case 3847:
case 3545:
case 2962:
case 1782:
case 4001:
case 259:
case 4044:
case 534:
case 54:
case 1203:
case 1377:
case 188:
case 2876:
case 1098:
case 4080:
case 955:
case 1732:
case 3551:
case 531:
case 1289:
case 1065:
case 2790:
case 1151:
case 1216:
case 2750:
case 2635:
case 586:
case 720:
case 1456:
case 1059:
case 959:
case 3591:
case 2102:
case 1229:
case 3:
case 749:
case 1228:
case 4041:
case 1632:
case 1243:
case 2735:
case 2650:
case 721:
case 2370:
case 3725:
case 115:
case 1303:
case 1800:
case 359:
case 2545:
case 3962:
case 1313:
case 404:
case 74:
case 1072:
case 1360:
case 457:
case 490:
case 1306:
case 731:
case 2975:
case 2270:
case 2:
case 1328:
case 666:
case 3873:
case 3370:
case 3062:
case 3650:
case 786:
case 1840:
case 401:
case 520:
case 1834:
case 442:
case 3790:
case 2515:
case 3267:
case 494:
case 521:
case 3102:
case 2591:
case 1866:
case 400:
case 1388:
case 676:
case 1881:
case 1972:
case 1502:
case 3750:
case 3025:
case 2809:
case 464:
case 1392:
case 2808:
case 2775:
case 759:
case 3201:
case 3244:
case 3990:
case 2818:
case 2819:
case 1556:
case 2675:
case 3269:
case 2311:
case 3491:
case 474:
case 3451:
case 187:
case 2368:
case 1387:
case 3196:
case 921:
case 3415:
case 34:
case 3950:
case 1337:
case 249:
case 331:
case 1279:
case 55:
case 3241:
case 3204:
case 924:
case 4070:
case 2341:
case 386:
case 2320:
case 245:
case 2848:
case 3454:
case 1553:
case 2864:
case 3090:
case 3985:
case 3280:
case 3153:
case 611:
case 81:
case 220:
case 3193:
case 2883:
case 606:
case 470:
case 883:
case 3494:
case 2986:
case 3673:
case 686:
case 2293:
case 1634:
case 1621:
case 2961:
case 1640:
case 3353:
case 2918:
case 2717:
case 631:
case 83:
case 3890:
case 2919:
case 2064:
case 2114:
case 4012:
case 311:
case 776:
case 2446:
case 2023:
case 1734:
case 306:
case 2141:
case 2120:
case 2439:
case 2617:
case 2036:
case 898:
case 2403:
case 2707:
case 2579:
case 840:
case 2155:
case 2061:
case 1467:
case 2488:
case 2647:
case 2296:
case 107:
case 893:
case 2256:
case 2169:
case 1710:
case 1187:
case 2416:
case 4042:
case 1600:
case 1624:
case 314:
case 1784:
case 1631:
case 3885:
case 2923:
case 3592:
case 2130:
case 396:
case 2429:
case 2949:
case 825:
case 64:
case 2008:
case 2009:
case 2936:
case 2406:
case 3825:
case 3552:
case 3527:
case 710:
case 2783:
case 2623:
case 2487:
case 1468:
case 366:
case 3516:
case 2648:
case 2202:
case 1495:
case 873:
case 3302:
case 1215:
case 1910:
case 4053:
case 2167:
case 1188:
case 1251:
case 1984:
case 2764:
case 3588:
case 1411:
case 2017:
case 2427:
case 3976:
case 2683:
case 481:
case 2723:
case 2212:
case 706:
case 3506:
case 863:
case 1128:
case 1401:
case 2007:
case 436:
case 3529:
case 3528:
case 1143:
case 2664:
case 2492:
case 1924:
case 1113:
case 1966:
case 2626:
case 177:
case 3342:
case 1480:
case 1063:
case 1872:
case 2761:
case 1414:
case 659:
case 4056:
case 2718:
case 2917:
case 1084:
case 2633:
case 2242:
case 1010:
case 2609:
case 484:
case 3479:
case 1404:
case 3503:
case 3478:
case 3973:
case 1139:
case 2686:
case 2726:
case 1934:
case 1940:
case 3076:
case 3538:
case 1103:
case 1031:
case 1024:
case 3546:
case 1146:
case 2709:
case 3129:
case 1170:
case 3430:
case 3128:
case 3444:
case 3205:
case 993:
case 3924:
case 1312:
case 3931:
case 3143:
case 3900:
case 3570:
case 176:
case 3021:
case 3106:
case 1073:
case 1862:
case 2899:
case 32:
case 3215:
case 1302:
case 2391:
case 2865:
case 925:
case 203:
case 166:
case 908:
case 292:
case 3963:
case 929:
case 3291:
case 2351:
case 750:
case 3066:
case 2858:
case 797:
case 2859:
case 339:
case 241:
case 225:
case 3024:
case 903:
case 3146:
case 367:
case 3138:
case 3404:
case 3420:
case 1479:
case 479:
case 229:
case 208:
case 3245:
case 3934:
case 572:
case 335:
case 437:
case 293:
case 2674:
case 465:
case 1560:
case 707:
case 377:
case 3113:
case 578:
case 2394:
case 1513:
case 998:
case 3981:
case 503:
case 263:
case 2520:
case 2541:
case 2504:
case 2071:
case 1773:
case 53:
case 499:
case 3681:
case 3734:
case 3740:
case 1537:
case 1835:
case 273:
case 2514:
case 1393:
case 2832:
case 423:
case 1673:
case 397:
case 3640:
case 3781:
case 3621:
case 3634:
case 962:
case 110:
case 978:
case 540:
case 3610:
case 0:
case 405:
case 3127:
case 3152:
case 3700:
case 739:
case 1552:
case 3684:
case 3724:
case 973:
case 2470:
case 687:
case 262:
case 196:
case 735:
case 1592:
case 1776:
case 3663:
case 767:
case 2501:
case 2544:
case 428:
case 2971:
case 354:
case 1396:
case 3187:
case 2897:
case 525:
case 3631:
case 3624:
case 3600:
case 541:
case 1587:
case 1676:
case 3467:
case 268:
case 307:
case 2555:
case 1196:
case 1211:
case 3387:
case 387:
case 2057:
case 1255:
case 3772:
case 134:
case 14:
case 1415:
case 3556:
case 2402:
case 1085:
case 2287:
case 1491:
case 2097:
case 2932:
case 1269:
case 1405:
case 2292:
case 4003:
case 2082:
case 3327:
case 489:
case 3672:
case 607:
case 1935:
case 582:
case 1201:
case 4038:
case 1025:
case 4046:
case 485:
case 3392:
case 2874:
case 1193:
case 2442:
case 85:
case 2922:
case 651:
case 2759:
case 3553:
case 1454:
case 2997:
case 1153:
case 2765:
case 1985:
case 4088:
case 130:
case 4089:
case 697:
case 8:
case 2379:
case 2659:
case 2658:
case 2871:
case 1762:
case 2698:
case 2699:
case 4029:
case 3278:
case 1925:
case 2665:
case 1241:
case 1220:
case 3360:
case 417:
case 3072:
case 2154:
case 635:
case 2757:
case 2958:
case 2682:
case 787:
case 1142:
case 2797:
case 2998:
case 3313:
case 3810:
case 3542:
case 4087:
case 2965:
case 2260:
case 2194:
case 2145:
case 2377:
case 319:
case 2203:
case 288:
case 1962:
case 2782:
case 2238:
case 3800:
case 3303:
case 983:
case 3824:
case 3831:
case 315:
case 1725:
case 2059:
case 3388:
case 3866:
case 3389:
case 2058:
case 1750:
case 3502:
case 988:
case 2456:
case 2496:
case 2065:
case 2099:
case 2115:
case 21:
case 820:
case 2289:
case 3329:
case 3512:
case 1112:
case 982:
case 3834:
case 3821:
case 3840:
case 4037:
case 1735:
case 456:
case 1650:
case 821:
case 2228:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1755190801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,];
var gg_b = "1755190801/";

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
