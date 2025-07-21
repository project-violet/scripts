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
case 3949:
case 3589:
case 2638:
case 2599:
case 4008:
case 2971:
case 3032:
case 3323:
case 2721:
case 338:
case 239:
case 1011:
case 1316:
case 2301:
case 2006:
case 1941:
case 3148:
case 3019:
case 3314:
case 3240:
case 1756:
case 808:
case 2763:
case 1575:
case 3361:
case 3066:
case 3408:
case 927:
case 1641:
case 1844:
case 2139:
case 1893:
case 1064:
case 1480:
case 2938:
case 2671:
case 851:
case 747:
case 3407:
case 2684:
case 2242:
case 2133:
case 1363:
case 1696:
case 1152:
case 416:
case 261:
case 2937:
case 380:
case 3643:
case 620:
case 4:
case 3110:
case 518:
case 3583:
case 1492:
case 1845:
case 4007:
case 1701:
case 3329:
case 3024:
case 3218:
case 2051:
case 291:
case 2356:
case 1574:
case 2875:
case 2467:
case 3709:
case 712:
case 179:
case 3013:
case 1026:
case 1321:
case 1065:
case 841:
case 1047:
case 757:
case 3241:
case 913:
case 2300:
case 2892:
case 2077:
case 2720:
case 1010:
case 163:
case 1762:
case 1917:
case 2958:
case 325:
case 21:
case 2970:
case 1475:
case 1398:
case 1867:
case 3508:
case 2670:
case 1617:
case 3828:
case 651:
case 193:
case 1481:
case 608:
case 1736:
case 3489:
case 2105:
case 2499:
case 3360:
case 3827:
case 2567:
case 820:
case 2336:
case 1166:
case 1474:
case 1125:
case 469:
case 560:
case 3302:
case 2880:
case 2493:
case 706:
case 1048:
case 976:
case 4076:
case 2798:
case 2362:
case 2078:
case 1243:
case 1132:
case 1918:
case 3111:
case 3296:
case 2957:
case 1397:
case 1700:
case 2286:
case 2192:
case 3826:
case 2859:
case 3477:
case 2525:
case 2337:
case 1824:
case 28:
case 1785:
case 1738:
case 387:
case 627:
case 1202:
case 3220:
case 649:
case 813:
case 1771:
case 3394:
case 1921:
case 1504:
case 941:
case 3128:
case 41:
case 1433:
case 2384:
case 3779:
case 2805:
case 3297:
case 1663:
case 2287:
case 3929:
case 1396:
case 3615:
case 231:
case 2956:
case 1046:
case 15:
case 4078:
case 2796:
case 3786:
case 714:
case 2235:
case 2076:
case 3349:
case 2513:
case 2180:
case 299:
case 3298:
case 1916:
case 3923:
case 398:
case 1825:
case 368:
case 3623:
case 920:
case 1616:
case 2338:
case 2222:
case 1168:
case 4031:
case 3530:
case 1737:
case 740:
case 815:
case 3068:
case 3406:
case 1453:
case 908:
case 1620:
case 2432:
case 951:
case 1215:
case 3263:
case 2936:
case 3848:
case 659:
case 97:
case 985:
case 1144:
case 2203:
case 70:
case 2636:
case 2740:
case 613:
case 2425:
case 2008:
case 2174:
case 2466:
case 849:
case 1920:
case 778:
case 2962:
case 439:
case 1770:
case 3577:
case 1758:
case 1193:
case 530:
case 1027:
case 2209:
case 2833:
case 750:
case 3216:
case 2358:
case 3191:
case 1998:
case 1223:
case 2007:
case 2718:
case 1852:
case 676:
case 4051:
case 1405:
case 3550:
case 1214:
case 461:
case 3067:
case 1459:
case 3810:
case 2413:
case 588:
case 1082:
case 1539:
case 1698:
case 3742:
case 2175:
case 3451:
case 133:
case 1907:
case 2778:
case 2347:
case 1274:
case 3283:
case 1154:
case 984:
case 906:
case 3035:
case 2244:
case 1377:
case 539:
case 840:
case 3156:
case 2129:
case 3692:
case 3088:
case 2542:
case 2982:
case 2115:
case 2486:
case 814:
case 776:
case 2628:
case 3022:
case 3858:
case 2473:
case 1494:
case 467:
case 678:
case 1155:
case 1449:
case 713:
case 1331:
case 1036:
case 2690:
case 957:
case 2627:
case 126:
case 60:
case 353:
case 2479:
case 821:
case 3857:
case 1908:
case 2020:
case 2777:
case 2872:
case 1710:
case 3517:
case 2114:
case 2299:
case 504:
case 2927:
case 3289:
case 759:
case 3540:
case 1747:
case 2990:
case 1378:
case 1109:
case 1495:
case 1350:
case 2097:
case 2123:
case 3087:
case 1976:
case 1594:
case 3304:
case 274:
case 3009:
case 51:
case 3713:
case 2311:
case 2016:
case 109:
case 177:
case 2586:
case 3838:
case 3974:
case 3596:
case 1001:
case 3885:
case 3162:
case 1983:
case 850:
case 162:
case 1683:
case 1134:
case 2102:
case 3871:
case 2646:
case 1292:
case 3055:
case 2364:
case 614:
case 1879:
case 3418:
case 3136:
case 381:
case 2268:
case 80:
case 1122:
case 1886:
case 3440:
case 2160:
case 3305:
case 929:
case 403:
case 3884:
case 2691:
case 2063:
case 2894:
case 3681:
case 3975:
case 3417:
case 2706:
case 1135:
case 3719:
case 4040:
case 3981:
case 3541:
case 1056:
case 1351:
case 343:
case 3837:
case 3208:
case 134:
case 3054:
case 2365:
case 3359:
case 3100:
case 2021:
case 4017:
case 1549:
case 1989:
case 4069:
case 1782:
case 3939:
case 950:
case 58:
case 1205:
case 2648:
case 3185:
case 3230:
case 2195:
case 2409:
case 1560:
case 148:
case 2522:
case 3416:
case 3171:
case 1631:
case 2707:
case 3469:
case 1978:
case 1950:
case 531:
case 12:
case 2224:
case 3612:
case 1728:
case 1057:
case 3836:
case 2588:
case 982:
case 2948:
case 324:
case 474:
case 575:
case 684:
case 1461:
case 2327:
case 2213:
case 4016:
case 1259:
case 2708:
case 2860:
case 599:
case 1977:
case 1415:
case 1204:
case 490:
case 2232:
case 1822:
case 3520:
case 311:
case 1727:
case 1058:
case 2947:
case 2587:
case 3206:
case 3633:
case 1790:
case 502:
case 2328:
case 2194:
case 2219:
case 2040:
case 1253:
case 829:
case 2266:
case 1888:
case 1835:
case 3421:
case 785:
case 2534:
case 3392:
case 3768:
case 1429:
case 203:
case 978:
case 460:
case 2610:
case 569:
case 3137:
case 914:
case 1651:
case 612:
case 1212:
case 1037:
case 2488:
case 3375:
case 2626:
case 336:
case 3856:
case 2829:
case 3905:
case 3569:
case 164:
case 3073:
case 1523:
case 194:
case 3516:
case 3605:
case 884:
case 230:
case 1389:
case 2815:
case 720:
case 2965:
case 1460:
case 3278:
case 1514:
case 940:
case 101:
case 806:
case 2096:
case 3158:
case 3381:
case 3086:
case 272:
case 2783:
case 3079:
case 1906:
case 1402:
case 2434:
case 1383:
case 132:
case 3953:
case 418:
case 1855:
case 1376:
case 4020:
case 3904:
case 2861:
case 3799:
case 2911:
case 205:
case 2664:
case 2789:
case 857:
case 2964:
case 2252:
case 741:
case 2814:
case 2172:
case 2487:
case 3604:
case 3801:
case 389:
case 1809:
case 1233:
case 3563:
case 1142:
case 921:
case 1606:
case 832:
case 2478:
case 2395:
case 2450:
case 268:
case 2623:
case 3385:
case 1609:
case 1806:
case 2614:
case 3804:
case 1108:
case 1074:
case 1379:
case 2786:
case 2661:
case 1200:
case 746:
case 2864:
case 2127:
case 2044:
case 3180:
case 511:
case 1909:
case 2773:
case 3235:
case 3371:
case 763:
case 3288:
case 298:
case 2431:
case 2298:
case 1373:
case 2220:
case 1511:
case 3089:
case 2099:
case 2128:
case 1954:
case 2343:
case 3452:
case 2929:
case 3287:
case 2615:
case 2297:
case 1081:
case 1386:
case 2826:
case 2477:
case 2629:
case 3656:
case 858:
case 3566:
case 1236:
case 184:
case 1447:
case 1654:
case 801:
case 38:
case 1851:
case 3234:
case 1564:
case 287:
case 2045:
case 2067:
case 2531:
case 1772:
case 480:
case 1465:
case 1877:
case 2960:
case 147:
case 3255:
case 632:
case 1688:
case 3175:
case 765:
case 1935:
case 1548:
case 1988:
case 2216:
case 3358:
case 2191:
case 129:
case 452:
case 3007:
case 2578:
case 1622:
case 4024:
case 1189:
case 1464:
case 1176:
case 59:
case 1080:
case 1256:
case 4019:
case 1547:
case 3357:
case 2146:
case 848:
case 1831:
case 2602:
case 3425:
case 779:
case 3174:
case 1634:
case 438:
case 1183:
case 3962:
case 1510:
case 2221:
case 601:
case 82:
case 2068:
case 2406:
case 2902:
case 423:
case 909:
case 1342:
case 1878:
case 1850:
case 373:
case 4025:
case 4066:
case 694:
case 658:
case 3593:
case 519:
case 3637:
case 1482:
case 2943:
case 252:
case 1714:
case 2024:
case 2218:
case 3051:
case 391:
case 3875:
case 2709:
case 1723:
case 1059:
case 2576:
case 1354:
case 3984:
case 3544:
case 2013:
case 3716:
case 2891:
case 2407:
case 2755:
case 3684:
case 3881:
case 2694:
case 553:
case 1005:
case 3030:
case 1761:
case 1686:
case 444:
case 545:
case 834:
case 2408:
case 809:
case 2361:
case 2066:
case 1715:
case 182:
case 4068:
case 1490:
case 1355:
case 892:
case 3112:
case 2649:
case 2846:
case 3938:
case 1131:
case 1150:
case 3638:
case 3599:
case 728:
case 1178:
case 1004:
case 2032:
case 3971:
case 2589:
case 2949:
case 862:
case 339:
case 1258:
case 2323:
case 238:
case 3721:
case 2754:
case 3685:
case 522:
case 3301:
case 2703:
case 1979:
case 2240:
case 948:
case 1729:
case 1053:
case 3273:
case 566:
case 3362:
case 2788:
case 3798:
case 3153:
case 700:
case 1284:
case 53:
case 3050:
case 3104:
case 3078:
case 1528:
case 121:
case 2111:
case 1387:
case 2827:
case 3657:
case 2722:
case 3444:
case 3031:
case 932:
case 2972:
case 1760:
case 1237:
case 1808:
case 468:
case 596:
case 1582:
case 3493:
case 2890:
case 3880:
case 581:
case 1039:
case 2828:
case 958:
case 3658:
case 2052:
case 692:
case 1702:
case 2734:
case 1807:
case 3105:
case 1033:
case 2241:
case 771:
case 3279:
case 3892:
case 2126:
case 3300:
case 3797:
case 1335:
case 217:
case 735:
case 3077:
case 1527:
case 3720:
case 225:
case 3958:
case 31:
case 662:
case 964:
case 1388:
case 3225:
case 2421:
case 3647:
case 3454:
case 2800:
case 3403:
case 2768:
case 3382:
case 481:
case 671:
case 3534:
case 1264:
case 2137:
case 303:
case 3610:
case 3232:
case 3143:
case 455:
case 554:
case 1562:
case 709:
case 3860:
case 1196:
case 4003:
case 2597:
case 792:
case 2633:
case 833:
case 84:
case 2206:
case 777:
case 2171:
case 3455:
case 1500:
case 3390:
case 3707:
case 2612:
case 3224:
case 3018:
case 4009:
case 965:
case 3948:
case 2836:
case 224:
case 956:
case 1226:
case 734:
case 1265:
case 3327:
case 3213:
case 1368:
case 1401:
case 587:
case 2042:
case 3409:
case 2912:
case 2185:
case 2862:
case 600:
case 1072:
case 3522:
case 1820:
case 871:
case 176:
case 3611:
case 1095:
case 453:
case 3964:
case 2497:
case 2745:
case 1632:
case 4034:
case 3487:
case 1925:
case 2653:
case 1816:
case 628:
case 445:
case 2563:
case 3346:
case 633:
case 1919:
case 3434:
case 1932:
case 3554:
case 2521:
case 2904:
case 2277:
case 305:
case 3789:
case 1118:
case 1436:
case 2605:
case 2516:
case 2744:
case 3776:
case 3509:
case 1863:
case 1913:
case 1140:
case 3815:
case 1774:
case 397:
case 2250:
case 2086:
case 1117:
case 1924:
case 2170:
case 422:
case 2158:
case 946:
case 367:
case 2231:
case 2375:
case 3488:
case 2856:
case 3665:
case 236:
case 963:
case 726:
case 2905:
case 3555:
case 1400:
case 2569:
case 3872:
case 3348:
case 2517:
case 3020:
case 1558:
case 2101:
case 3927:
case 0:
case 3114:
case 3299:
case 1668:
case 758:
case 4079:
case 1485:
case 1116:
case 219:
case 3097:
case 318:
case 552:
case 679:
case 95:
case 1169:
case 580:
case 971:
case 1733:
case 764:
case 1968:
case 253:
case 2857:
case 3479:
case 2441:
case 1818:
case 2339:
case 2034:
case 935:
case 607:
case 3245:
case 900:
case 2992:
case 3115:
case 1163:
case 3542:
case 141:
case 1739:
case 3486:
case 1712:
case 46:
case 3628:
case 2333:
case 1060:
case 3347:
case 2518:
case 1557:
case 3778:
case 222:
case 49:
case 3928:
case 1667:
case 3244:
case 2035:
case 2276:
case 3310:
case 2088:
case 3682:
case 770:
case 2156:
case 3129:
case 2692:
case 1290:
case 2675:
case 3706:
case 2003:
case 1198:
case 1753:
case 2981:
case 390:
case 2208:
case 3365:
case 2054:
case 1571:
case 411:
case 266:
case 296:
case 1538:
case 1699:
case 542:
case 3160:
case 3063:
case 3894:
case 879:
case 2884:
case 748:
case 1537:
case 1693:
case 1366:
case 1061:
case 2674:
case 3102:
case 3364:
case 2055:
case 1841:
case 4042:
case 1457:
case 1644:
case 424:
case 1759:
case 3573:
case 1197:
case 1023:
case 2713:
case 3016:
case 3311:
case 151:
case 2974:
case 856:
case 2596:
case 2207:
case 3586:
case 1319:
case 2162:
case 3751:
case 2353:
case 1993:
case 17:
case 1646:
case 448:
case 1102:
case 838:
case 1730:
case 3325:
case 3061:
case 2683:
case 2676:
case 3841:
case 3457:
case 2879:
case 1364:
case 3282:
case 593:
case 3759:
case 3197:
case 2765:
case 2726:
case 3023:
case 2187:
case 3332:
case 2976:
case 3014:
case 2543:
case 292:
case 42:
case 1442:
case 546:
case 1895:
case 4057:
case 3993:
case 37:
case 351:
case 3120:
case 823:
case 277:
case 1586:
case 1946:
case 2056:
case 1579:
case 3324:
case 1991:
case 2188:
case 137:
case 2135:
case 642:
case 2280:
case 944:
case 2711:
case 2549:
case 4058:
case 4070:
case 3571:
case 1021:
case 880:
case 234:
case 190:
case 1160:
case 2595:
case 852:
case 160:
case 3585:
case 3945:
case 1843:
case 2886:
case 3699:
case 2764:
case 3470:
case 910:
case 1691:
case 1486:
case 3739:
case 2443:
case 3352:
case 1115:
case 1982:
case 3484:
case 4037:
case 1731:
case 817:
case 789:
case 3712:
case 3967:
case 638:
case 2572:
case 2154:
case 2000:
case 1928:
case 401:
case 1293:
case 3667:
case 623:
case 2274:
case 383:
case 3246:
case 3557:
case 3437:
case 987:
case 1682:
case 1129:
case 595:
case 458:
case 1244:
case 2377:
case 2103:
case 1114:
case 3668:
case 1872:
case 470:
case 2710:
case 1020:
case 1777:
case 579:
case 3291:
case 3116:
case 3438:
case 2281:
case 118:
case 1123:
case 2378:
case 2109:
case 2350:
case 2747:
case 76:
case 2275:
case 3733:
case 2449:
case 3169:
case 3471:
case 2155:
case 2608:
case 3002:
case 736:
case 998:
case 954:
case 1245:
case 226:
case 3968:
case 3818:
case 4085:
case 3863:
case 3913:
case 1815:
case 359:
case 2523:
case 294:
case 172:
case 3501:
case 1391:
case 1096:
case 3924:
case 2630:
case 3774:
case 197:
case 2514:
case 2746:
case 3043:
case 1488:
case 1435:
case 2930:
case 2212:
case 745:
case 3821:
case 3345:
case 753:
case 1555:
case 3613:
case 1829:
case 917:
case 1487:
case 2038:
case 2085:
case 533:
case 1611:
case 1964:
case 3462:
case 2233:
case 2809:
case 3925:
case 3816:
case 854:
case 868:
case 3869:
case 3625:
case 1434:
case 2383:
case 232:
case 3781:
case 1346:
case 3556:
case 3247:
case 2529:
case 2906:
case 1911:
case 4062:
case 1664:
case 942:
case 3118:
case 1861:
case 2376:
case 528:
case 1554:
case 3210:
case 270:
case 3049:
case 2057:
case 492:
case 1224:
case 1018:
case 2834:
case 73:
case 743:
case 3500:
case 1455:
case 1707:
case 2978:
case 2950:
case 3265:
case 1213:
case 766:
case 796:
case 2205:
case 3792:
case 3897:
case 3401:
case 2782:
case 2931:
case 1522:
case 2650:
case 1195:
case 462:
case 2560:
case 1647:
case 1454:
case 1225:
case 698:
case 654:
case 3367:
case 2677:
case 103:
case 1403:
case 3952:
case 2502:
case 2070:
case 844:
case 2822:
case 2415:
case 1143:
case 3562:
case 1910:
case 2977:
case 980:
case 2253:
case 4056:
case 1194:
case 2173:
case 2790:
case 1947:
case 1587:
case 3780:
case 571:
case 3491:
case 768:
case 3807:
case 3238:
case 293:
case 3285:
case 3130:
case 1105:
case 562:
case 2736:
case 3033:
case 2640:
case 1892:
case 1445:
case 2580:
case 577:
case 1797:
case 592:
case 1279:
case 246:
case 2124:
case 11:
case 2475:
case 2398:
case 754:
case 798:
case 400:
case 509:
case 1720:
case 534:
case 435:
case 2294:
case 2119:
case 3106:
case 845:
case 3642:
case 2048:
case 681:
case 2397:
case 2868:
case 2700:
case 1286:
case 2918:
case 321:
case 853:
case 696:
case 3387:
case 4046:
case 989:
case 1050:
case 1104:
case 1078:
case 2243:
case 2132:
case 1336:
case 3760:
case 1567:
case 2618:
case 3012:
case 666:
case 1657:
case 1444:
case 3942:
case 3582:
case 2592:
case 1880:
case 3039:
case 63:
case 2125:
case 643:
case 1139:
case 2641:
case 2575:
case 3715:
case 1671:
case 3131:
case 2480:
case 924:
case 382:
case 1985:
case 622:
case 2316:
case 3258:
case 3270:
case 1721:
case 1685:
case 3309:
case 1599:
case 3150:
case 3053:
case 2756:
case 2941:
case 4090:
case 1468:
case 3979:
case 186:
case 3714:
case 3257:
case 881:
case 4028:
case 30:
case 1051:
case 1356:
case 191:
case 2574:
case 1593:
case 3303:
case 2492:
case 2845:
case 2026:
case 3723:
case 2065:
case 3354:
case 1544:
case 428:
case 1716:
case 1875:
case 104:
case 1467:
case 3973:
case 1242:
case 1133:
case 433:
case 911:
case 3428:
case 1684:
case 4082:
case 619:
case 855:
case 1937:
case 2696:
case 3761:
case 2899:
case 2318:
case 3987:
case 1740:
case 2997:
case 752:
case 1636:
case 3176:
case 2090:
case 2144:
case 1203:
case 3080:
case 2770:
case 2758:
case 2193:
case 2027:
case 1717:
case 3510:
case 594:
case 495:
case 3183:
case 1962:
case 4011:
case 66:
case 3831:
case 1425:
case 1174:
case 1008:
case 2920:
case 1419:
case 3934:
case 3342:
case 2453:
case 3850:
case 1662:
case 564:
case 465:
case 4064:
case 824:
case 3411:
case 1936:
case 2533:
case 2215:
case 2404:
case 3687:
case 1413:
case 2145:
case 1:
case 2512:
case 3426:
case 3922:
case 811:
case 1600:
case 1424:
case 347:
case 2698:
case 1255:
case 2223:
case 479:
case 3548:
case 4065:
case 329:
case 981:
case 1833:
case 1209:
case 2757:
case 2214:
case 1900:
case 407:
case 3201:
case 532:
case 1007:
case 2433:
case 1089:
case 86:
case 3954:
case 3373:
case 3107:
case 463:
case 3749:
case 4010:
case 1287:
case 2091:
case 1956:
case 2663:
case 3386:
case 3081:
case 1741:
case 1452:
case 446:
case 1519:
case 3903:
case 52:
case 1337:
case 3603:
case 922:
case 384:
case 3075:
case 3236:
case 1525:
case 2963:
case 2813:
case 548:
case 1656:
case 3410:
case 493:
case 2202:
case 2738:
case 3447:
case 306:
case 89:
case 2621:
case 3654:
case 742:
case 3795:
case 2167:
case 3609:
case 1338:
case 3806:
case 3955:
case 2616:
case 2505:
case 1853:
case 2737:
case 2260:
case 3448:
case 611:
case 1222:
case 2168:
case 3200:
case 2439:
case 1083:
case 271:
case 1524:
case 25:
case 3108:
case 3379:
case 2046:
case 1288:
case 717:
case 2669:
case 199:
case 1513:
case 3909:
case 3526:
case 953:
case 1371:
case 1076:
case 2625:
case 3402:
case 2919:
case 3383:
case 869:
case 2781:
case 1953:
case 2393:
case 3791:
case 2869:
case 2556:
case 1079:
case 3529:
case 3906:
case 1799:
case 616:
case 2118:
case 2436:
case 1277:
case 529:
case 6:
case 2932:
case 3376:
case 3071:
case 2210:
case 1521:
case 1904:
case 4002:
case 1604:
case 1801:
case 802:
case 3809:
case 2775:
case 2462:
case 3515:
case 2619:
case 2925:
case 1420:
case 2966:
case 899:
case 1231:
case 1375:
case 1498:
case 3651:
case 3930:
case 16:
case 3212:
case 2624:
case 2400:
case 1569:
case 2345:
case 831:
case 136:
case 1856:
case 2613:
case 2913:
case 2140:
case 3084:
case 3523:
case 358:
case 2248:
case 1744:
case 1170:
case 1793:
case 3630:
case 1158:
case 1086:
case 1381:
case 718:
case 1278:
case 2774:
case 673:
case 3822:
case 1520:
case 2652:
case 816:
case 2196:
case 3058:
case 1463:
case 3415:
case 1184:
case 3253:
case 1206:
case 961:
case 3173:
case 3790:
case 986:
case 991:
case 2367:
case 2456:
case 602:
case 2264:
case 3502:
case 1768:
case 3414:
case 3205:
case 2897:
case 3887:
case 2792:
case 3931:
case 249:
case 1138:
case 3650:
case 485:
case 584:
case 1862:
case 1230:
case 3560:
case 1612:
case 32:
case 215:
case 1251:
case 3728:
case 3057:
case 227:
case 3950:
case 3834:
case 4023:
case 790:
case 2226:
case 2265:
case 3259:
case 3308:
case 1598:
case 2585:
case 1440:
case 1305:
case 891:
case 196:
case 3122:
case 2538:
case 3886:
case 2699:
case 2458:
case 3873:
case 1975:
case 1417:
case 804:
case 1884:
case 2015:
case 1766:
case 1681:
case 1719:
case 9:
case 521:
case 3280:
case 1003:
case 916:
case 2571:
case 1100:
case 1359:
case 2999:
case 3711:
case 2313:
case 3989:
case 2227:
case 1837:
case 1208:
case 1732:
case 334:
case 1713:
case 3765:
case 2197:
case 208:
case 3976:
case 2332:
case 1304:
case 3594:
case 1009:
case 2944:
case 1724:
case 27:
case 2014:
case 2319:
case 514:
case 415:
case 1162:
case 392:
case 1207:
case 1838:
case 1974:
case 2120:
case 1674:
case 3134:
case 449:
case 4072:
case 1871:
case 2325:
case 839:
case 2366:
case 362:
case 2537:
case 2693:
case 2705:
case 2644:
case 2282:
case 3292:
case 3331:
case 3036:
case 145:
case 2169:
case 3155:
case 3449:
case 1339:
case 1752:
case 2818:
case 2968:
case 326:
case 153:
case 4095:
case 2668:
case 3062:
case 661:
case 1289:
case 730:
case 3908:
case 2558:
case 2570:
case 4049:
case 3710:
case 3281:
case 797:
case 2291:
case 2116:
case 1087:
case 119:
case 1540:
case 1980:
case 3747:
case 2485:
case 772:
case 3842:
case 3495:
case 2667:
case 3154:
case 1283:
case 122:
case 2246:
case 2557:
case 4043:
case 3274:
case 2437:
case 1088:
case 3748:
case 98:
case 705:
case 2739:
case 975:
case 241:
case 582:
case 2163:
case 3443:
case 2840:
case 2352:
case 413:
case 1333:
case 3572:
case 639:
case 2967:
case 1858:
case 4059:
case 960:
case 478:
case 3317:
case 328:
case 2988:
case 2548:
case 2935:
case 1430:
case 2189:
case 2622:
case 3214:
case 1550:
case 40:
case 110:
case 1660:
case 2877:
case 2426:
case 3512:
case 1810:
case 3145:
case 2772:
case 2922:
case 605:
case 144:
case 1847:
case 2635:
case 1742:
case 3082:
case 2092:
case 990:
case 2850:
case 3453:
case 1902:
case 697:
case 2934:
case 672:
case 974:
case 1068:
case 1406:
case 2411:
case 1848:
case 3404:
case 513:
case 3533:
case 1263:
case 3997:
case 2256:
case 3229:
case 3090:
case 2464:
case 704:
case 450:
case 1221:
case 3758:
case 1577:
case 3027:
case 667:
case 1602:
case 2831:
case 1864:
case 1093:
case 371:
case 1127:
case 2200:
case 257:
case 1914:
case 3341:
case 3046:
case 603:
case 35:
case 2108:
case 2074:
case 1431:
case 335:
case 3916:
case 1923:
case 198:
case 3825:
case 2909:
case 2526:
case 3412:
case 1773:
case 2565:
case 1190:
case 71:
case 2806:
case 4039:
case 2609:
case 168:
case 1623:
case 2955:
case 3969:
case 1395:
case 1530:
case 3260:
case 3737:
case 3832:
case 1961:
case 1614:
case 2448:
case 830:
case 2075:
case 440:
case 1629:
case 2410:
case 3963:
case 1182:
case 1826:
case 1865:
case 1477:
case 187:
case 3202:
case 897:
case 872:
case 3921:
case 1099:
case 1128:
case 2954:
case 3433:
case 1220:
case 867:
case 2511:
case 2081:
case 1929:
case 3091:
case 1779:
case 3553:
case 1343:
case 2237:
case 2760:
case 2808:
case 1972:
case 1722:
case 3618:
case 3592:
case 1302:
case 905:
case 2942:
case 2582:
case 3166:
case 3474:
case 3294:
case 3119:
case 1788:
case 2642:
case 775:
case 1507:
case 3397:
case 4074:
case 1672:
case 3132:
case 731:
case 1882:
case 1126:
case 3113:
case 551:
case 57:
case 346:
case 214:
case 702:
case 3124:
case 2151:
case 3475:
case 1508:
case 3398:
case 2335:
case 2271:
case 363:
case 2491:
case 3481:
case 3295:
case 930:
case 3617:
case 2285:
case 1828:
case 3736:
case 2033:
case 585:
case 484:
case 1360:
case 997:
case 2428:
case 837:
case 773:
case 1694:
case 4092:
case 1755:
case 180:
case 890:
case 3272:
case 2761:
case 2686:
case 3363:
case 1315:
case 3696:
case 1329:
case 3996:
case 1024:
case 3574:
case 2546:
case 2714:
case 2257:
case 1583:
case 860:
case 152:
case 3492:
case 307:
case 379:
case 1013:
case 3321:
case 3026:
case 1994:
case 429:
case 2723:
case 2354:
case 1709:
case 1754:
case 1217:
case 3011:
case 412:
case 2270:
case 1949:
case 2150:
case 2309:
case 2004:
case 1019:
case 583:
case 1314:
case 1240:
case 2729:
case 2053:
case 3756:
case 1703:
case 2979:
case 3941:
case 3581:
case 2427:
case 874:
case 3575:
case 1066:
case 1025:
case 2490:
case 3064:
case 3893:
case 3480:
o = 0; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1753066801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,];
var gg_b = "1753066801/";

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
