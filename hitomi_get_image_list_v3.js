// This source code is a part of Project Violet.
// Copyright (C) 2021. violet-team. Licensed under the Apache-2.0 License.
//
// Script Name: hitomi_get_image_list.js
// Input:  $id     [int] - Hitomi.la Article Id
// Output: $result [Map] - Image List, Thumbnail List

function create_download_url(id) {
  return "https://ltn.hitomi.la/galleries/" + id + ".js";
}

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
case 105:
case 2792:
case 2422:
case 3539:
case 3796:
case 1580:
case 599:
case 3388:
case 3297:
case 1921:
case 3373:
case 608:
case 607:
case 354:
case 2720:
case 3111:
case 3537:
case 3117:
case 1167:
case 1917:
case 3474:
case 1465:
case 4093:
case 3826:
case 3427:
case 1143:
case 2066:
case 142:
case 1075:
case 1175:
case 1197:
case 3732:
case 3436:
case 3591:
case 2333:
case 3897:
case 3430:
case 1346:
case 3479:
case 1883:
case 2036:
case 4045:
case 3516:
case 344:
case 22:
case 3874:
case 494:
case 3127:
case 996:
case 2493:
case 664:
case 214:
case 2908:
case 1413:
case 3861:
case 779:
case 2769:
case 90:
case 4095:
case 705:
case 2633:
case 3780:
case 3956:
case 3338:
case 2744:
case 3831:
case 4050:
case 3886:
case 391:
case 1068:
case 3316:
case 3134:
case 2038:
case 469:
case 2701:
case 376:
case 3153:
case 3616:
case 1988:
case 601:
case 2345:
case 2495:
case 1647:
case 2385:
case 3521:
case 610:
case 197:
case 1160:
case 2875:
case 3194:
case 3997:
case 386:
case 719:
case 1801:
case 3604:
case 781:
case 2134:
case 2040:
case 3526:
case 977:
case 2096:
case 2380:
case 493:
case 3905:
case 3345:
case 2909:
case 3637:
case 2735:
case 2384:
case 2888:
case 703:
case 3449:
case 2634:
case 1792:
case 2529:
case 3830:
case 2536:
case 3120:
case 2419:
case 665:
case 1232:
case 1753:
case 822:
case 2389:
case 4040:
case 140:
case 2683:
case 311:
case 390:
case 1935:
case 1763:
case 1040:
case 1137:
case 932:
case 1530:
case 1183:
case 287:
case 343:
case 3082:
case 1152:
case 807:
case 514:
case 1874:
case 3815:
case 104:
case 632:
case 2087:
case 1726:
case 1653:
case 3029:
case 3523:
case 873:
case 2603:
case 3272:
case 3914:
case 1243:
case 3603:
case 3772:
case 1392:
case 3507:
case 3691:
case 2336:
case 3032:
case 3185:
case 2296:
case 631:
case 2110:
case 2104:
case 2430:
case 184:
case 2467:
case 3879:
case 1909:
case 3286:
case 1014:
case 2025:
case 3292:
case 2625:
case 3660:
case 232:
case 3359:
case 1582:
case 2366:
case 1670:
case 1737:
case 1313:
case 3039:
case 925:
case 2187:
case 3298:
case 3977:
case 4080:
case 2328:
case 2559:
case 1862:
case 1633:
case 4001:
case 3578:
case 1275:
case 137:
case 296:
case 2051:
case 1163:
case 294:
case 3441:
case 3235:
case 984:
case 1607:
case 892:
case 1188:
case 1926:
case 727:
case 1147:
case 1242:
case 2244:
case 682:
case 2509:
case 1985:
case 1451:
case 1893:
case 396:
case 2170:
case 41:
case 2525:
case 756:
case 4054:
case 1403:
case 1526:
case 2613:
case 3738:
case 1459:
case 645:
case 1951:
case 1369:
case 136:
case 3608:
case 237:
case 1584:
case 3233:
case 3241:
case 100:
case 330:
case 1174:
case 3614:
case 4006:
case 1423:
case 424:
case 553:
case 697:
case 621:
case 474:
case 3580:
case 4066:
case 2912:
case 205:
case 4073:
case 4077:
case 1832:
case 2864:
case 3398:
case 2145:
case 3225:
case 1666:
case 737:
case 211:
case 1038:
case 928:
case 2814:
case 1631:
case 3873:
case 733:
case 2441:
case 2109:
case 1452:
case 110:
case 927:
case 3651:
case 3011:
case 1961:
case 3374:
case 1268:
case 3037:
case 2074:
case 2167:
case 3530:
case 1060:
case 3248:
case 3417:
case 2856:
case 3690:
case 1764:
case 670:
case 2842:
case 2804:
case 3740:
case 3543:
case 710:
case 2920:
case 2092:
case 369:
case 2169:
case 3158:
case 268:
case 2699:
case 1455:
case 3761:
case 3484:
case 3829:
case 3023:
case 3623:
case 2471:
case 1255:
case 3348:
case 2550:
case 526:
case 688:
case 2318:
case 2277:
case 3917:
case 3161:
case 4003:
case 1370:
case 1487:
case 1705:
case 3561:
case 28:
case 1165:
case 250:
case 19:
case 2121:
case 2678:
case 1906:
case 3043:
case 2543:
case 2299:
case 716:
case 3531:
case 1345:
case 3196:
case 3025:
case 973:
case 2396:
case 2188:
case 3967:
case 725:
case 3678:
case 3357:
case 3730:
case 407:
case 1835:
case 1759:
case 2217:
case 2782:
case 2797:
case 111:
case 2117:
case 2581:
case 30:
case 182:
case 260:
case 1189:
case 3903:
case 3862:
case 1831:
case 1131:
case 3188:
case 83:
case 2210:
case 456:
case 594:
case 3138:
case 1354:
case 451:
case 52:
case 3003:
case 1794:
case 3648:
case 2596:
case 2162:
case 168:
case 880:
case 26:
case 3816:
case 3792:
case 2472:
case 3141:
case 728:
case 3353:
case 2968:
case 918:
case 1292:
case 3774:
case 2150:
case 2262:
case 2898:
case 3713:
case 2650:
case 3715:
case 931:
case 2723:
case 2934:
case 738:
case 840:
case 1746:
case 2940:
case 3069:
case 3168:
case 3144:
case 1518:
case 2220:
case 2576:
case 449:
case 2127:
case 2395:
case 389:
case 3610:
case 458:
case 430:
case 3534:
case 2846:
case 2577:
case 191:
case 2425:
case 3146:
case 326:
case 2891:
case 1966:
case 2592:
case 2276:
case 452:
case 204:
case 3485:
case 2211:
case 3156:
case 3163:
case 2705:
case 102:
case 3802:
case 3054:
case 3611:
case 1414:
case 3258:
case 2490:
case 634:
case 3908:
case 2676:
case 520:
case 1190:
case 1317:
case 1442:
case 3232:
case 3841:
case 3066:
case 1870:
case 3579:
case 275:
case 2578:
case 225:
case 183:
case 3093:
case 1521:
case 1468:
case 1895:
case 2489:
case 2409:
case 416:
case 2037:
case 575:
case 2443:
case 2102:
case 1664:
case 2341:
case 1565:
case 583:
case 2143:
case 141:
case 1791:
case 3431:
case 1323:
case 3936:
case 799:
case 3889:
case 2718:
case 1714:
case 37:
case 2506:
case 1309:
case 2246:
case 2946:
case 518:
case 3883:
case 2798:
case 3638:
case 2826:
case 1430:
case 448:
case 3500:
case 2221:
case 223:
case 2971:
case 3631:
case 2696:
case 1126:
case 2452:
case 3444:
case 1400:
case 896:
case 20:
case 1394:
case 86:
case 2451:
case 3867:
case 3750:
case 2655:
case 1520:
case 3554:
case 350:
case 957:
case 3893:
case 1497:
case 1003:
case 3095:
case 3064:
case 4021:
case 3771:
case 1869:
case 2142:
case 659:
case 2004:
case 3590:
case 186:
case 1491:
case 3310:
case 3506:
case 224:
case 124:
case 2547:
case 1867:
case 1550:
case 571:
case 2504:
case 878:
case 3989:
case 1127:
case 3717:
case 1431:
case 1025:
case 2088:
case 3527:
case 503:
case 4038:
case 23:
case 1984:
case 2327:
case 2193:
case 3268:
case 2068:
case 1628:
case 988:
case 459:
case 379:
case 1865:
case 3376:
case 622:
case 2234:
case 712:
case 2269:
case 2157:
case 228:
case 3708:
case 2994:
case 1164:
case 2387:
case 3698:
case 3863:
case 1524:
case 1356:
case 1434:
case 3728:
case 206:
case 2238:
case 2013:
case 2108:
case 1773:
case 3320:
case 2148:
case 154:
case 381:
case 3033:
case 522:
case 1263:
case 1026:
case 315:
case 1178:
case 3743:
case 1702:
case 2470:
case 3442:
case 368:
case 2573:
case 2105:
case 1780:
case 1802:
case 3071:
case 363:
case 2237:
case 2393:
case 1170:
case 1767:
case 556:
case 2736:
case 121:
case 119:
case 3244:
case 2656:
case 838:
case 2488:
case 2743:
case 2924:
case 2648:
case 1525:
case 3654:
case 1920:
case 1617:
case 61:
case 2518:
case 1213:
case 1593:
case 1575:
case 579:
case 2435:
case 1418:
case 1144:
case 1045:
case 3435:
case 1636:
case 2408:
case 643:
case 2601:
case 2398:
case 3986:
case 1548:
case 129:
case 3993:
case 3421:
case 1223:
case 3858:
case 597:
case 2255:
case 3901:
case 133:
case 1649:
case 669:
case 1102:
case 1703:
case 3511:
case 2890:
case 1658:
case 3203:
case 1409:
case 1169:
case 1907:
case 319:
case 3380:
case 3853:
case 2228:
case 59:
case 1090:
case 1662:
case 2572:
case 2944:
case 395:
case 1613:
case 2953:
case 1140:
case 1896:
case 2026:
case 1533:
case 743:
case 3782:
case 2326:
case 1307:
case 3172:
case 3126:
case 2881:
case 964:
case 1493:
case 367:
case 291:
case 3289:
case 2335:
case 2195:
case 2863:
case 729:
case 2549:
case 748:
case 1840:
case 2030:
case 1435:
case 1618:
case 955:
case 3559:
case 2492:
case 1742:
case 4091:
case 1138:
case 173:
case 352:
case 3264:
case 1785:
case 1380:
case 2404:
case 1377:
case 2783:
case 1194:
case 2286:
case 4074:
case 1566:
case 2567:
case 2297:
case 404:
case 2680:
case 570:
case 933:
case 2474:
case 2877:
case 2382:
case 2665:
case 3401:
case 3545:
case 806:
case 1577:
case 24:
case 3584:
case 1285:
case 1635:
case 850:
case 1198:
case 2461:
case 3779:
case 490:
case 335:
case 1913:
case 1543:
case 17:
case 2756:
case 1172:
case 3294:
case 1783:
case 1012:
case 1234:
case 2862:
case 3178:
case 773:
case 3798:
case 2178:
case 3618:
case 4046:
case 1820:
case 2977:
case 308:
case 3130:
case 3860:
case 2952:
case 1981:
case 1018:
case 3030:
case 1729:
case 1079:
case 2606:
case 1182:
case 71:
case 871:
case 2487:
case 2880:
case 462:
case 76:
case 2011:
case 2851:
case 1546:
case 1362:
case 2222:
case 958:
case 3:
case 3445:
case 3337:
case 3673:
case 3274:
case 152:
case 497:
case 1378:
case 347:
case 3834:
case 3227:
case 2961:
case 763:
case 3683:
case 3243:
case 3455:
case 3451:
case 1586:
case 2733:
case 1592:
case 879:
case 3945:
case 1036:
case 266:
case 585:
case 3795:
case 3764:
case 3313:
case 1024:
case 3949:
case 2833:
case 2457:
case 3799:
case 1220:
case 3288:
case 2729:
case 2257:
case 2100:
case 3454:
case 3790:
case 1799:
case 1274:
case 745:
case 158:
case 2941:
case 3960:
case 177:
case 3452:
case 3818:
case 3733:
case 2260:
case 935:
case 1373:
case 1674:
case 3969:
case 95:
case 1196:
case 1490:
case 372:
case 2773:
case 507:
case 635:
case 470:
case 2309:
case 3099:
case 2191:
case 2819:
case 1968:
case 2339:
case 2081:
case 2914:
case 2231:
case 453:
case 3655:
case 89:
case 2919:
case 909:
case 3040:
case 2557:
case 146:
case 2086:
case 3806:
case 867:
case 1009:
case 3605:
case 1637:
case 2734:
case 2710:
case 2235:
case 2319:
case 3533:
case 2497:
case 1046:
case 2990:
case 3588:
case 2986:
case 1945:
case 2149:
case 3552:
case 1013:
case 1809:
case 3612:
case 2410:
case 1180:
case 2928:
case 2201:
case 3951:
case 2879:
case 3865:
case 1027:
case 3280:
case 3817:
case 1811:
case 2957:
case 3541:
case 2012:
case 504:
case 911:
case 2658:
case 3206:
case 1115:
case 1795:
case 3422:
case 1:
case 1994:
case 1880:
case 3245:
case 259:
case 3180:
case 3314:
case 546:
case 2531:
case 1494:
case 1256:
case 3705:
case 3165:
case 2774:
case 1113:
case 2479:
case 1032:
case 869:
case 2527:
case 595:
case 2841:
case 1211:
case 684:
case 1325:
case 2636:
case 2771:
case 2073:
case 3721:
case 25:
case 3167:
case 3287:
case 2458:
case 2876:
case 866:
case 4022:
case 401:
case 2369:
case 4062:
case 3202:
case 135:
case 1731:
case 2508:
case 3878:
case 382:
case 3682:
case 726:
case 176:
case 2813:
case 2098:
case 1195:
case 1130:
case 3696:
case 1771:
case 3573:
case 3370:
case 1489:
case 513:
case 3213:
case 2340:
case 3518:
case 2688:
case 1544:
case 915:
case 412:
case 2258:
case 210:
case 2649:
case 2630:
case 15:
case 2475:
case 2494:
case 849:
case 78:
case 1342:
case 218:
case 2351:
case 359:
case 2915:
case 3224:
case 3214:
case 3504:
case 2376:
case 1541:
case 800:
case 2818:
case 747:
case 2664:
case 3042:
case 5:
case 3307:
case 3240:
case 1006:
case 1375:
case 2693:
case 692:
case 1982:
case 2730:
case 3332:
case 1240:
case 3557:
case 2204:
case 2965:
case 483:
case 1424:
case 1668:
case 3283:
case 2206:
case 2691:
case 3007:
case 2667:
case 2392:
case 1250:
case 2082:
case 3181:
case 434:
case 2197:
case 73:
case 2361:
case 1136:
case 602:
case 2790:
case 1297:
case 1322:
case 3833:
case 3234:
case 1303:
case 999:
case 346:
case 2343:
case 79:
case 1461:
case 1680:
case 683:
case 435:
case 3475:
case 3704:
case 2967:
case 2179:
case 3907:
case 907:
case 786:
case 2950:
case 2185:
case 1472:
case 365:
case 199:
case 606:
case 578:
case 2927:
case 3971:
case 921:
case 4015:
case 1082:
case 2:
case 2447:
case 2229:
case 196:
case 3719:
case 2719:
case 2727:
case 1492:
case 1854:
case 3162:
case 3140:
case 1760:
case 1679:
case 1484:
case 3137:
case 1750:
case 2565:
case 425:
case 2806:
case 3363:
case 3953:
case 498:
case 1910:
case 1504:
case 3633:
case 2612:
case 1663:
case 464:
case 4042:
case 3456:
case 3446:
case 1772:
case 1341:
case 1886:
case 2218:
case 815:
case 1568:
case 2867:
case 1503:
case 3766:
case 1888:
case 3078:
case 2553:
case 701:
case 919:
case 1693:
case 3383:
case 768:
case 1481:
case 3919:
case 4008:
case 187:
case 3083:
case 272:
case 2993:
case 3895:
case 2587:
case 2808:
case 2097:
case 81:
case 2484:
case 3864:
case 4065:
case 839:
case 3103:
case 2931:
case 1936:
case 1261:
case 1644:
case 3955:
case 3676:
case 3053:
case 2672:
case 1675:
case 4078:
case 818:
case 2642:
case 2423:
case 916:
case 2989:
case 3055:
case 515:
case 4084:
case 3379:
case 3463:
case 31:
case 2431:
case 1978:
case 2522:
case 1698:
case 2526:
case 2513:
case 3963:
case 2241:
case 1042:
case 3472:
case 2563:
case 2164:
case 2635:
case 2272:
case 2918:
case 1368:
case 2010:
case 3317:
case 3577:
case 2473:
case 3553:
case 29:
case 482:
case 2726:
case 2703:
case 2869:
case 3408:
case 2401:
case 1031:
case 11:
case 101:
case 2935:
case 98:
case 2954:
case 2595:
case 2225:
case 2835:
case 3112:
case 3674:
case 1554:
case 3794:
case 360:
case 485:
case 3570:
case 3076:
case 4030:
case 4026:
case 2894:
case 1738:
case 1212:
case 190:
case 2476:
case 1595:
case 1463:
case 1879:
case 4036:
case 2569:
case 2446:
case 1312:
case 2415:
case 1070:
case 1931:
case 1933:
case 3747:
case 2090:
case 3331:
case 3351:
case 2324:
case 511:
case 2839:
case 1478:
case 3751:
case 3211:
case 2827:
case 3787:
case 2397:
case 1043:
case 2039:
case 2825:
case 1660:
case 138:
case 1922:
case 663:
case 2611:
case 2728:
case 2168:
case 541:
case 2003:
case 3659:
case 1107:
case 2459:
case 2069:
case 149:
case 3748:
case 2731:
case 2466:
case 3976:
case 1574:
case 654:
case 2695:
case 1894:
case 262:
case 1843:
case 4023:
case 1706:
case 2762:
case 1161:
case 2481:
case 2365:
case 2189:
case 604:
case 4032:
case 629:
case 439:
case 947:
case 1193:
case 620:
case 3149:
case 852:
case 161:
case 53:
case 2500:
case 1004:
case 1605:
case 2507:
case 4:
case 265:
case 905:
case 3109:
case 2325:
case 1630:
case 3450:
case 564:
case 2059:
case 596:
case 3411:
case 2020:
case 1569:
case 1248:
case 2616:
case 3857:
case 1302:
case 1991:
case 3991:
case 1326:
case 55:
case 609:
case 1440:
case 808:
case 574:
case 264:
case 1614:
case 1249:
case 4002:
case 3688:
case 3179:
case 4016:
case 3922:
case 2265:
case 3350:
case 2751:
case 1111:
case 3143:
case 1054:
case 1970:
case 2058:
case 2455:
case 3416:
case 487:
case 3606:
case 2717:
case 3692:
case 1716:
case 1564:
case 2896:
case 2368:
case 2429:
case 2190:
case 4043:
case 872:
case 1444:
case 3318:
case 2093:
case 1364:
case 1252:
case 2843:
case 3758:
case 2628:
case 2163:
case 75:
case 3811:
case 49:
case 2001:
case 2023:
case 2755:
case 1479:
case 2541:
case 2483:
case 1745:
case 2131:
case 496:
case 3068:
case 35:
case 1069:
case 2964:
case 3634:
case 2639:
case 3333:
case 3219:
case 1687:
case 3939:
case 3097:
case 3866:
case 1101:
case 348:
case 1498:
case 2885:
case 327:
case 762:
case 1733:
case 103:
case 1829:
case 3567:
case 419:
case 3569:
case 1284:
case 3058:
case 2627:
case 3807:
case 1227:
case 1846:
case 3012:
case 2208:
case 1286:
case 832:
case 1881:
case 1336:
case 3777:
case 3499:
case 2016:
case 351:
case 2988:
case 3465:
case 1837:
case 1510:
case 3722:
case 3106:
case 2947:
case 2600:
case 3756:
case 3209:
case 3509:
case 299:
case 2765:
case 1645:
case 649:
case 289:
case 414:
case 1083:
case 1651:
case 428:
case 3890:
case 1928:
case 323:
case 1611:
case 1151:
case 307:
case 3399:
case 1331:
case 1084:
case 3849:
case 1257:
case 699:
case 938:
case 18:
case 45:
case 1534:
case 2381:
case 1105:
case 732:
case 1320:
case 3305:
case 740:
case 2922:
case 1659:
case 2061:
case 1191:
case 1671:
case 540:
case 1987:
case 2252:
case 3599:
case 876:
case 1293:
case 273:
case 1999:
case 3290:
case 1266:
case 2434:
case 2766:
case 3677:
case 2740:
case 783:
case 3145:
case 943:
case 817:
case 3395:
case 956:
case 94:
case 88:
case 500:
case 3024:
case 1776:
case 4020:
case 3412:
case 2315:
case 1457:
case 796:
case 244:
case 3184:
case 3067:
case 3343:
case 309:
case 3389:
case 3926:
case 3918:
case 678:
case 3934:
case 1797:
case 1404:
case 963:
case 628:
case 3837:
case 284:
case 227:
case 4007:
case 1383:
case 3927:
case 409:
case 2002:
case 3208:
case 3988:
case 69:
case 1199:
case 4072:
case 1448:
case 388:
case 901:
case 2709:
case 2357:
case 2243:
case 3959:
case 3402:
case 4067:
case 2041:
case 3171:
case 2491:
case 1815:
case 375:
case 3974:
case 2287:
case 2317:
case 3699:
case 3159:
case 900:
case 2545:
case 3736:
case 174:
case 3490:
case 298:
case 2280:
case 3898:
case 941:
case 3791:
case 3174:
case 2347:
case 3236:
case 565:
case 1247:
case 2138:
case 2597:
case 342:
case 1305:
case 1754:
case 3282:
case 3597:
case 707:
case 263:
case 1552:
case 893:
case 2948:
case 3763:
case 2084:
case 3358:
case 2253:
case 1344:
case 1462:
case 2251:
case 3594:
case 1897:
case 185:
case 660:
case 46:
case 1290:
case 820:
case 3701:
case 1051:
case 2958:
case 2803:
case 912:
case 2591:
case 550:
case 3596:
case 917:
case 1300:
case 1267:
case 2057:
case 2558:
case 3680:
case 1288:
case 2496:
case 1860:
case 3371:
case 1010:
case 1822:
case 3429:
case 2095:
case 3404:
case 1514:
case 2198:
case 3458:
case 3050:
case 2227:
case 835:
case 1557:
case 1821:
case 1781:
case 2045:
case 3742:
case 539:
case 3685:
case 3813:
case 3852:
case 2464:
case 2122:
case 3075:
case 501:
case 341:
case 3437:
case 2153:
case 3843:
case 1299:
case 2812:
case 961:
case 2139:
case 3491:
case 506:
case 1796:
case 3121:
case 2975:
case 3607:
case 3542:
case 3801:
case 2278:
case 1030:
case 980:
case 2124:
case 192:
case 2629:
case 3262:
case 3299:
case 3564:
case 403:
case 1627:
case 637:
case 3495:
case 3300:
case 3004:
case 1035:
case 1121:
case 1441:
case 2900:
case 761:
case 3877:
case 2223:
case 734:
case 1454:
case 1324:
case 2962:
case 422:
case 3420:
case 179:
case 3100:
case 1902:
case 859:
case 1722:
case 230:
case 3438:
case 2113:
case 349:
case 3635:
case 58:
case 1953:
case 3624:
case 790:
case 3169:
case 527:
case 3632:
case 1338:
case 960:
case 2905:
case 3114:
case 3269:
case 112:
case 1848:
case 3197:
case 706:
case 1106:
case 1898:
case 43:
case 2362:
case 751:
case 1208:
case 970:
case 759:
case 1470:
case 221:
case 2938:
case 3524:
case 1002:
case 3056:
case 2438:
case 4083:
case 1384:
case 3925:
case 3467:
case 3018:
case 2236:
case 1405:
case 246:
case 543:
case 1736:
case 2031:
case 3369:
case 331:
case 2996:
case 3483:
case 529:
case 1450:
case 1665:
case 1277:
case 1669:
case 724:
case 1134:
case 3215:
case 1528:
case 4010:
case 1516:
case 2866:
case 990:
case 1501:
case 1439:
case 130:
case 2359:
case 4048:
case 1386:
case 1021:
case 1877:
case 576:
case 615:
case 2043:
case 1343:
case 544:
case 2978:
case 1587:
case 2568:
case 1334:
case 16:
case 2956:
case 2414:
case 1063:
case 1390:
case 1609:
case 107:
case 2400:
case 2047:
case 2302:
case 366:
case 2809:
case 3581:
case 2777:
case 533:
case 4014:
case 2671:
case 63:
case 672:
case 1374:
case 3489:
case 413:
case 1601:
case 3769:
case 3201:
case 3393:
case 117:
case 1977:
case 1506:
case 3640:
case 3400:
case 2304:
case 525:
case 2686:
case 4044:
case 3010:
case 1690:
case 2929:
case 1397:
case 1859:
case 1621:
case 1955:
case 2844:
case 530:
case 3621:
case 2622:
case 1782:
case 2874:
case 812:
case 1226:
case 1828:
case 3154:
case 2823:
case 3978:
case 3498:
case 569:
case 1080:
case 746:
case 864:
case 3247:
case 2207:
case 1849:
case 3913:
case 406:
case 1807:
case 2342:
case 1847:
case 1228:
case 2129:
case 715:
case 3255:
case 2099:
case 1145:
case 3881:
case 3987:
case 1094:
case 1803:
case 3403:
case 2858:
case 3808:
case 219:
case 3984:
case 3222:
case 3695:
case 2702:
case 676:
case 3572:
case 2837:
case 1547:
case 2427:
case 170:
case 3645:
case 1777:
case 267:
case 3092:
case 2279:
case 2514:
case 320:
case 2871:
case 1683:
case 3361:
case 3909:
case 3847:
case 2746:
case 361:
case 3221:
case 1141:
case 2949:
case 1456:
case 765:
case 166:
case 1221:
case 1301:
case 3006:
case 1531:
case 2528:
case 1132:
case 328:
case 2562:
case 2063:
case 3123:
case 3672:
case 455:
case 1352:
case 2136:
case 2673:
case 4057:
case 3147:
case 886:
case 3575:
case 1735:
case 1949:
case 68:
case 1158:
case 4025:
case 2216:
case 2604:
case 4027:
case 1844:
case 1571:
case 2530:
case 2042:
case 3962:
case 2008:
case 2363:
case 617:
case 680:
case 3912:
case 582:
case 951:
case 1768:
case 1594:
case 1603:
case 2152:
case 792:
case 2610:
case 1813:
case 647:
case 3630:
case 1808:
case 2955:
case 3757:
case 122:
case 3391:
case 1005:
case 2358:
case 2054:
case 1339:
case 362:
case 2194:
case 2904:
case 1839:
case 767:
case 2320:
case 744:
case 1959:
case 3488:
case 2378:
case 3548:
case 940:
case 2752:
case 3788:
case 1133:
case 3387:
case 248:
case 2450:
case 3556:
case 1570:
case 4071:
case 1725:
case 3720:
case 1071:
case 467:
case 1477:
case 1089:
case 509:
case 3164:
case 1540:
case 3136:
case 1836:
case 2829:
case 1279:
case 3694:
case 1259:
case 774:
case 3574:
case 2316:
case 2714:
case 3013:
case 3257:
case 1445:
case 1650:
case 1467:
case 2620:
case 3931:
case 2165:
case 1560:
case 3649:
case 2883:
case 3718:
case 2570:
case 2352:
case 1420:
case 340:
case 2621:
case 2250:
case 3096:
case 1081:
case 2661:
case 974:
case 3035:
case 1712:
case 523:
case 702:
case 4037:
case 4031:
case 3322:
case 3753:
case 2091:
case 1924:
case 2034:
case 1678:
case 269:
case 3413:
case 510:
case 1914:
case 1235:
case 2158:
case 863:
case 2289:
case 3080:
case 2724:
case 1976:
case 2080:
case 3218:
case 322:
case 457:
case 942:
case 1855:
case 1597:
case 1422:
case 332:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1673694001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,1,1,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,1,];
var gg_b = "1673694001/";

function hitomi_get_image_list() {
  files = galleryinfo["files"];
  // function test(id, files) {
  number_of_frontends = 3;
  subdomain = "a";
  btresult = [];
  stresult = [];
  result = [];
  for (var rr of files) {
    hash = rr["hash"];
    postfix = hash.substr(hash.length - 3);
    subdomainx = subdomain;
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) subdomainx = "b";
    x = parseInt(postfix[2] + postfix[0] + postfix[1], 16);
    if (!isNaN(x)) {
      if (x < 4096) subdomainx = String.fromCharCode(97 + gg_m[x]);
      else subdomainx = String.fromCharCode(97 + 0);
    }
    if (rr["haswebp"] == 0 || rr["haswebp"] == null) {
      result.push(
        `https://${subdomainx}b.hitomi.la/images/${gg_b + gg.s(hash)}/${hash}.${
          rr["name"].split(".").slice(-1)[0]
        }`
      );
    } else if (hash == "")
      result.push(`https://${subdomainx}a.hitomi.la/webp/${rr["name"]}.webp`);
    else if (hash.length < 3)
      result.push(`https://${subdomainx}a.hitomi.la/webp/${hash}.webp`);
    else {
      result.push(
        `https://${subdomainx}a.hitomi.la/webp/${
            gg.b + gg.s(hash)
        }/${hash}.webp`
      );
    }
    if (rr["haswebp"] == 1)
    {
      btresult.push(
        `https://tn.hitomi.la/webpbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/webpsmalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.webp`
      );
    }
    // else if (rr["hasavif"] == 1)
    // {
    //   btresult.push(
    //     `https://tn.hitomi.la/avifbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    //   stresult.push(
    //     `https://${subdomainx}tn.hitomi.la/avifsmallbigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.avif`
    //   );
    // }
    else 
    {
      btresult.push(
        `https://tn.hitomi.la/bigtn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
      stresult.push(
        `https://${subdomainx}tn.hitomi.la/smalltn/${postfix[2]}/${postfix[0]}${postfix[1]}/${hash}.jpg`
      );
    }
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
