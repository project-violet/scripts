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
case 547:
case 2871:
case 668:
case 697:
case 810:
case 2633:
case 2671:
case 901:
case 4032:
case 811:
case 3202:
case 1332:
case 1631:
case 1772:
case 2935:
case 1509:
case 1464:
case 3296:
case 1918:
case 3022:
case 1913:
case 2744:
case 3562:
case 1158:
case 3005:
case 1346:
case 3008:
case 3018:
case 2395:
case 4064:
case 1568:
case 2448:
case 2803:
case 3861:
case 151:
case 3471:
case 2785:
case 2991:
case 7:
case 3076:
case 3335:
case 3485:
case 3677:
case 453:
case 1362:
case 1282:
case 2022:
case 3396:
case 175:
case 2814:
case 2901:
case 324:
case 2840:
case 329:
case 1629:
case 2405:
case 555:
case 1001:
case 2129:
case 3807:
case 2956:
case 1481:
case 2304:
case 2354:
case 714:
case 27:
case 2264:
case 195:
case 2441:
case 3572:
case 1277:
case 1768:
case 3874:
case 1181:
case 1484:
case 3321:
case 3517:
case 3509:
case 793:
case 3510:
case 1956:
case 1491:
case 1686:
case 873:
case 3446:
case 1714:
case 400:
case 929:
case 2698:
case 2987:
case 3566:
case 2654:
case 878:
case 1506:
case 1197:
case 2028:
case 1111:
case 1157:
case 4046:
case 2191:
case 3974:
case 914:
case 24:
case 4065:
case 3780:
case 2861:
case 654:
case 3590:
case 358:
case 964:
case 4093:
case 3729:
case 1705:
case 1293:
case 2752:
case 3947:
case 300:
case 1633:
case 3363:
case 2852:
case 370:
case 69:
case 2490:
case 146:
case 3435:
case 1342:
case 3869:
case 1016:
case 2841:
case 2881:
case 879:
case 995:
case 2525:
case 250:
case 3660:
case 2108:
case 1386:
case 1294:
case 717:
case 1684:
case 137:
case 3634:
case 613:
case 1865:
case 2406:
case 742:
case 2621:
case 2491:
case 1376:
case 2387:
case 1496:
case 3160:
case 3489:
case 2799:
case 352:
case 1573:
case 362:
case 3150:
case 1546:
case 3476:
case 1149:
case 996:
case 1393:
case 3576:
case 3913:
case 2911:
case 1335:
case 3842:
case 1518:
case 2589:
case 2165:
case 3112:
case 709:
case 3929:
case 861:
case 3420:
case 3769:
case 554:
case 441:
case 1097:
case 212:
case 1103:
case 2319:
case 1430:
case 2707:
case 3727:
case 3536:
case 1992:
case 2690:
case 261:
case 104:
case 2099:
case 381:
case 1188:
case 1850:
case 2762:
case 3386:
case 1742:
case 3786:
case 2231:
case 3457:
case 1665:
case 88:
case 3629:
case 2331:
case 2393:
case 2498:
case 1965:
case 2665:
case 2527:
case 1639:
case 3895:
case 3248:
case 890:
case 3082:
case 2524:
case 2347:
case 1061:
case 496:
case 2237:
case 1371:
case 2505:
case 2340:
case 2422:
case 2358:
case 1640:
case 3304:
case 3926:
case 308:
case 2127:
case 1251:
case 4085:
case 652:
case 3230:
case 3673:
case 1653:
case 1535:
case 1780:
case 1000:
case 3950:
case 614:
case 1245:
case 1999:
case 2007:
case 1275:
case 3502:
case 2921:
case 3132:
case 1059:
case 2071:
case 609:
case 862:
case 2249:
case 371:
case 1922:
case 2561:
case 1279:
case 3289:
case 1781:
case 467:
case 2666:
case 4055:
case 1634:
case 2130:
case 392:
case 1237:
case 208:
case 3199:
case 4000:
case 3711:
case 1683:
case 3756:
case 3270:
case 2453:
case 1765:
case 1590:
case 1777:
case 4005:
case 2889:
case 2119:
case 1672:
case 4083:
case 2558:
case 1235:
case 3949:
case 3553:
case 3379:
case 508:
case 494:
case 796:
case 963:
case 48:
case 2845:
case 2242:
case 3244:
case 3317:
case 2726:
case 3726:
case 1586:
case 46:
case 1677:
case 3272:
case 3900:
case 1940:
case 1139:
case 1820:
case 1646:
case 3919:
case 2243:
case 3753:
case 3580:
case 2155:
case 3632:
case 1924:
case 1055:
case 3609:
case 2480:
case 3534:
case 2512:
case 3849:
case 1388:
case 1477:
case 3909:
case 833:
case 2835:
case 3139:
case 972:
case 2172:
case 2245:
case 1575:
case 4023:
case 1039:
case 2341:
case 1052:
case 1523:
case 1020:
case 2333:
case 125:
case 3586:
case 1102:
case 1094:
case 2823:
case 2209:
case 1349:
case 588:
case 2622:
case 466:
case 3444:
case 1652:
case 2432:
case 3574:
case 3878:
case 1615:
case 820:
case 3078:
case 818:
case 3:
case 3752:
case 3722:
case 2885:
case 2917:
case 585:
case 487:
case 2134:
case 465:
case 1960:
case 420:
case 2772:
case 1222:
case 1796:
case 1637:
case 1136:
case 210:
case 2481:
case 3277:
case 2862:
case 2815:
case 1114:
case 2966:
case 3937:
case 2587:
case 3735:
case 2834:
case 1748:
case 1268:
case 1269:
case 1497:
case 3578:
case 1418:
case 3871:
case 785:
case 2792:
case 3890:
case 3750:
case 3057:
case 2035:
case 2850:
case 1325:
case 3781:
case 639:
case 2927:
case 1460:
case 1138:
case 2685:
case 2544:
case 718:
case 2414:
case 3678:
case 3085:
case 3944:
case 171:
case 911:
case 3348:
case 357:
case 743:
case 354:
case 2452:
case 1439:
case 2305:
case 2428:
case 2617:
case 31:
case 1759:
case 3672:
case 82:
case 1576:
case 1213:
case 819:
case 1367:
case 2603:
case 528:
case 885:
case 1844:
case 3946:
case 2181:
case 3621:
case 3369:
case 2804:
case 1757:
case 1051:
case 1641:
case 2152:
case 2140:
case 749:
case 1223:
case 2431:
case 60:
case 704:
case 332:
case 1005:
case 726:
case 3412:
case 858:
case 2198:
case 304:
case 592:
case 3252:
case 134:
case 3526:
case 1155:
case 3400:
case 3428:
case 545:
case 1038:
case 2094:
case 2496:
case 2436:
case 892:
case 4034:
case 3691:
case 564:
case 1926:
case 2595:
case 1313:
case 1687:
case 117:
case 1307:
case 3719:
case 2511:
case 1587:
case 350:
case 2724:
case 1542:
case 598:
case 3868:
case 2011:
case 2296:
case 1874:
case 3124:
case 1414:
case 2183:
case 936:
case 2364:
case 1862:
case 1990:
case 2769:
case 2474:
case 3419:
case 1073:
case 3037:
case 855:
case 703:
case 3565:
case 826:
case 2156:
case 1896:
case 3701:
case 2002:
case 1359:
case 3996:
case 2648:
case 1236:
case 2938:
case 57:
case 3233:
case 1088:
case 3136:
case 1305:
case 661:
case 2868:
case 2399:
case 516:
case 660:
case 1217:
case 1345:
case 3053:
case 1846:
case 3983:
case 3203:
case 3058:
case 1908:
case 120:
case 3940:
case 724:
case 2147:
case 1146:
case 295:
case 2457:
case 1471:
case 77:
case 568:
case 361:
case 2941:
case 2764:
case 1585:
case 2433:
case 1278:
case 990:
case 3738:
case 515:
case 3772:
case 1855:
case 522:
case 462:
case 2821:
case 1455:
case 2614:
case 3795:
case 3087:
case 1448:
case 830:
case 1603:
case 3863:
case 3748:
case 784:
case 3969:
case 1271:
case 2800:
case 3161:
case 1571:
case 3072:
case 4075:
case 42:
case 294:
case 3792:
case 2058:
case 2357:
case 1419:
case 912:
case 2674:
case 3025:
case 544:
case 189:
case 105:
case 1565:
case 432:
case 1322:
case 3367:
case 2761:
case 3923:
case 573:
case 349:
case 1494:
case 2932:
case 2782:
case 3712:
case 2719:
case 2760:
case 3988:
case 309:
case 3808:
case 4063:
case 2281:
case 2415:
case 102:
case 1485:
case 1437:
case 3328:
case 1875:
case 3811:
case 2986:
case 55:
case 62:
case 2086:
case 3883:
case 2858:
case 924:
case 1580:
case 1170:
case 1457:
case 1766:
case 1068:
case 2996:
case 1673:
case 414:
case 92:
case 4003:
case 2662:
case 1399:
case 913:
case 1256:
case 3507:
case 1553:
case 2727:
case 852:
case 2954:
case 3303:
case 897:
case 463:
case 1679:
case 3589:
case 998:
case 1187:
case 2032:
case 801:
case 825:
case 1982:
case 3490:
case 2776:
case 2069:
case 2355:
case 794:
case 944:
case 2061:
case 2239:
case 764:
case 3336:
case 657:
case 2320:
case 3638:
case 618:
case 2072:
case 3571:
case 2682:
case 1030:
case 656:
case 1968:
case 3706:
case 2098:
case 1053:
case 1656:
case 2056:
case 2327:
case 887:
case 1771:
case 1145:
case 1289:
case 4008:
case 1841:
case 85:
case 3731:
case 1517:
case 3141:
case 322:
case 21:
case 2620:
case 1328:
case 864:
case 215:
case 282:
case 1856:
case 809:
case 386:
case 3388:
case 1106:
case 2203:
case 265:
case 2940:
case 3293:
case 1817:
case 3717:
case 3887:
case 1806:
case 1205:
case 176:
case 2052:
case 1786:
case 1075:
case 982:
case 2037:
case 196:
case 447:
case 3314:
case 504:
case 607:
case 2652:
case 2259:
case 4070:
case 1618:
case 1428:
case 133:
case 3281:
case 3843:
case 317:
case 3455:
case 4067:
case 2277:
case 3207:
case 790:
case 2849:
case 3760:
case 139:
case 2509:
case 2014:
case 2488:
case 1120:
case 3848:
case 2846:
case 1805:
case 3732:
case 948:
case 2294:
case 1972:
case 2519:
case 3032:
case 2157:
case 2000:
case 368:
case 3851:
case 3456:
case 271:
case 1966:
case 3514:
case 1192:
case 1533:
case 415:
case 2250:
case 408:
case 1002:
case 2107:
case 2933:
case 3945:
case 673:
case 2234:
case 2824:
case 1210:
case 2810:
case 1733:
case 3165:
case 2732:
case 3966:
case 816:
case 3529:
case 187:
case 500:
case 531:
case 3783:
case 715:
case 1128:
case 693:
case 3679:
case 40:
case 1176:
case 3985:
case 3374:
case 602:
case 203:
case 967:
case 2877:
case 744:
case 2262:
case 2959:
case 1909:
case 2872:
case 3997:
case 1591:
case 928:
case 3362:
case 2192:
case 2515:
case 2994:
case 1793:
case 2371:
case 3469:
case 3278:
case 1083:
case 2879:
case 1749:
case 2783:
case 739:
case 1600:
case 3097:
case 1864:
case 2531:
case 1783:
case 1577:
case 3425:
case 2039:
case 3938:
case 1025:
case 3615:
case 2403:
case 3145:
case 1879:
case 3728:
case 2678:
case 648:
case 3198:
case 2180:
case 1941:
case 1451:
case 3608:
case 582:
case 1739:
case 3458:
case 1482:
case 3154:
case 247:
case 1416:
case 976:
case 521:
case 2890:
case 227:
case 1829:
case 3605:
case 2297:
case 2219:
case 2656:
case 1035:
case 1500:
case 4037:
case 1970:
case 3688:
case 2735:
case 3743:
case 1434:
case 3905:
case 1422:
case 2064:
case 857:
case 1079:
case 2997:
case 687:
case 3917:
case 904:
case 2784:
case 491:
case 1080:
case 3708:
case 2479:
case 542:
case 1845:
case 2109:
case 3951:
case 1131:
case 2882:
case 26:
case 2381:
case 449:
case 746:
case 4069:
case 2710:
case 763:
case 1715:
case 3134:
case 923:
case 2254:
case 58:
case 993:
case 3981:
case 1675:
case 3439:
case 4006:
case 4009:
case 1598:
case 2447:
case 3182:
case 3115:
case 1702:
case 256:
case 3027:
case 1650:
case 2492:
case 2315:
case 2507:
case 1456:
case 287:
case 2569:
case 3250:
case 1382:
case 3190:
case 3284:
case 1216:
case 2592:
case 3942:
case 443:
case 243:
case 2416:
case 131:
case 3975:
case 1852:
case 211:
case 1259:
case 2581:
case 2083:
case 162:
case 326:
case 147:
case 3646:
case 1247:
case 201:
case 577:
case 4049:
case 1084:
case 1368:
case 2863:
case 3410:
case 3487:
case 4056:
case 1493:
case 2955:
case 3618:
case 437:
case 468:
case 3581:
case 2912:
case 891:
case 2646:
case 1085:
case 3034:
case 3593:
case 1012:
case 1709:
case 529:
case 999:
case 1736:
case 2124:
case 2427:
case 3059:
case 970:
case 3826:
case 612:
case 2653:
case 2348:
case 1555:
case 2010:
case 935:
case 2472:
case 3500:
case 1729:
case 249:
case 2922:
case 2298:
case 1513:
case 3286:
case 2856:
case 1458:
case 1540:
case 3644:
case 2822:
case 876:
case 482:
case 2230:
case 3831:
case 2096:
case 4040:
case 4036:
case 84:
case 2345:
case 870:
case 2023:
case 1685:
case 4017:
case 2214:
case 1662:
case 3880:
case 3204:
case 674:
case 1074:
case 2163:
case 1996:
case 1744:
case 1934:
case 997:
case 2248:
case 3294:
case 1741:
case 1347:
case 377:
case 3421:
case 3813:
case 81:
case 2443:
case 3128:
case 584:
case 2697:
case 213:
case 1365:
case 2265:
case 1589:
case 1692:
case 1202:
case 3994:
case 2736:
case 2605:
case 2306:
case 640:
case 2568:
case 3763:
case 3774:
case 1782:
case 1788:
case 543:
case 2636:
case 3111:
case 1029:
case 3637:
case 2076:
case 2668:
case 2521:
case 1693:
case 2541:
case 2660:
case 1113:
case 2060:
case 2529:
case 2280:
case 3312:
case 3253:
case 2122:
case 574:
case 3095:
case 781:
case 3006:
case 135:
case 3083:
case 1826:
case 951:
case 1078:
case 118:
case 3936:
case 711:
case 2434:
case 2854:
case 2919:
case 3279:
case 3484:
case 1803:
case 1043:
case 451:
case 3436:
case 979:
case 2362:
case 3246:
case 1101:
case 3907:
case 238:
case 3791:
case 1948:
case 2923:
case 1554:
case 3049:
case 3779:
case 699:
case 3465:
case 2773:
case 3225:
case 596:
case 2121:
case 1153:
case 454:
case 1884:
case 962:
case 1009:
case 3915:
case 1379:
case 895:
case 3504:
case 224:
case 2397:
case 3324:
case 954:
case 2759:
case 3659:
case 933:
case 1156:
case 3443:
case 1529:
case 3341:
case 2601:
case 3597:
case 927:
case 439:
case 2424:
case 2465:
case 2692:
case 1232:
case 74:
case 140:
case 2817:
case 1794:
case 3793:
case 2965:
case 1661:
case 2745:
case 1515:
case 3273:
case 1503:
case 3532:
case 1519:
case 1682:
case 3014:
case 418:
case 397:
case 937:
case 621:
case 1698:
case 3477:
case 1524:
case 1292:
case 3212:
case 283:
case 1511:
case 485:
case 1830:
case 1754:
case 3126:
case 3333:
case 986:
case 3004:
case 2153:
case 1994:
case 2723:
case 1396:
case 2924:
case 2339:
case 1262:
case 2838:
case 842:
case 2469:
case 2637:
case 1790:
case 421:
case 3546:
case 3494:
case 376:
case 1108:
case 4052:
case 2797:
case 259:
case 2818:
case 2300:
case 1703:
case 2295:
case 3543:
case 1390:
case 1910:
case 2006:
case 2135:
case 356:
case 1338:
case 894:
case 2650:
case 4014:
case 4027:
case 3599:
case 3516:
case 2802:
case 526:
case 2812:
case 163:
case 1340:
case 2148:
case 3544:
case 1023:
case 1392:
case 1722:
case 615:
case 173:
case 2767:
case 2578:
case 2110:
case 3213:
case 3825:
case 2550:
case 2352:
case 2643:
case 2960:
case 1536:
case 1732:
case 3694:
case 1177:
case 1602:
case 586:
case 1991:
case 2982:
case 1327:
case 2564:
case 3833:
case 2367:
case 292:
case 110:
case 2820:
case 2641:
case 733:
case 1104:
case 3347:
case 3653:
case 1957:
case 1476:
case 1058:
case 2222:
case 1248:
case 1606:
case 2751:
case 1040:
case 2460:
case 2361:
case 638:
case 3195:
case 1218:
case 808:
case 2463:
case 2282:
case 732:
case 3036:
case 1670:
case 412:
case 2770:
case 2639:
case 1532:
case 475:
case 2895:
case 1667:
case 3835:
case 3432:
case 2162:
case 1285:
case 1676:
case 1264:
case 2450:
case 1713:
case 1868:
case 768:
case 444:
case 1912:
case 1822:
case 2184:
case 2402:
case 4002:
case 445:
case 353:
case 1375:
case 4007:
case 2747:
case 806:
case 3171:
case 2272:
case 507:
case 1119:
case 1657:
case 3703:
case 1564:
case 3525:
case 1304:
case 720:
case 154:
case 2224:
case 1427:
case 2715:
case 854:
case 3627:
case 3249:
case 3301:
case 4090:
case 1208:
case 3267:
case 369:
case 2703:
case 1060:
case 1173:
case 2756:
case 1433:
case 3393:
case 3415:
case 3962:
case 3626:
case 2808:
case 101:
case 3048:
case 37:
case 2376:
case 1837:
case 1955:
case 2865:
case 2628:
case 1316:
case 4012:
case 2292:
case 3358:
case 823:
case 298:
case 380:
case 3824:
case 1374:
case 277:
case 3882:
case 1528:
case 3110:
case 909:
case 2739:
case 662:
case 318:
case 388:
case 3391:
case 3403:
case 1835:
case 3081:
case 3928:
case 2092:
case 2851:
case 690:
case 3401:
case 2477:
case 3184:
case 2640:
case 3044:
case 149:
case 338:
case 95:
case 1799:
case 1892:
case 3584:
case 831:
case 2369:
case 2168:
case 646:
case 320:
case 3318:
case 2781:
case 2359:
case 2559:
case 645:
case 49:
case 3337:
case 1220:
case 2377:
case 1635:
case 1643:
case 1132:
case 2976:
case 36:
case 3100:
case 228:
case 1904:
case 1787:
case 3682:
case 2336:
case 2878:
case 3178:
case 351:
case 3001:
case 263:
case 1674:
case 2409:
case 1014:
case 3852:
case 2616:
case 728:
case 209:
case 2103:
case 273:
case 2926:
case 2552:
case 3927:
case 3370:
case 3745:
case 1549:
case 3071:
case 3086:
case 3766:
case 3623:
case 436:
case 3972:
case 623:
case 1943:
case 3757:
case 30:
case 127:
case 1832:
case 2468:
case 2807:
case 1127:
case 2618:
case 922:
case 2870:
case 1645:
case 642:
case 1728:
case 3518:
case 1520:
case 1582:
case 2875:
case 1472:
case 2968:
case 1258:
case 1921:
case 3891:
case 1324:
case 4074:
case 3970:
case 3715:
case 3069:
case 1065:
case 1154:
case 3822:
case 2827:
case 1900:
case 2576:
case 1200:
case 2667:
case 510:
case 2585:
case 1435:
case 2133:
case 225:
case 1100:
case 158:
case 3235:
case 2208:
case 3395:
case 3855:
case 1352:
case 2478:
case 3019:
case 851:
case 3472:
case 2523:
case 1818:
case 2210:
case 1109:
case 2067:
case 96:
case 3837:
case 3710:
case 2131:
case 2314:
case 2992:
case 2607:
case 2204:
case 1828:
case 3449:
case 3188:
case 3144:
case 3872:
case 3491:
case 2461:
case 834:
case 538:
case 4024:
case 3802:
case 2907:
case 479:
case 219:
case 920:
case 766:
case 3579:
case 3668:
case 2293:
case 1037:
case 778:
case 837:
case 2137:
case 943:
case 2913:
case 2880:
case 3999:
case 874:
case 184:
case 3024:
case 116:
case 695:
case 3441:
case 569:
case 959:
case 285:
case 1082:
case 2437:
case 1601:
case 3398:
case 2412:
case 2696:
case 1019:
case 2883:
case 2766:
case 3322:
case 1046:
case 2720:
case 1309:
case 4031:
case 4025:
case 2688:
case 2867:
case 1140:
case 2310:
case 3836:
case 803:
case 2266:
case 1745:
case 1465:
case 2045:
case 477:
case 1204:
case 3914:
case 2289:
case 902:
case 2876:
case 1596:
case 2604:
case 112:
case 266:
case 958:
case 1226:
case 2929:
case 2570:
case 402:
case 1671:
case 3299:
case 3817:
case 1370:
case 2186:
case 3413:
case 394:
case 1267:
case 2778:
case 3903:
case 1076:
case 3561:
case 3964:
case 480:
case 2003:
case 798:
case 336:
case 1130:
case 1159:
case 3219:
case 312:
case 3194:
case 1784:
case 3705:
case 1358:
case 839:
case 2594:
case 3302:
case 524:
case 279:
case 291:
case 3251:
case 2233:
case 1740:
case 2332:
case 1321:
case 389:
case 3542:
case 1871:
case 3631:
case 2948:
case 1260:
case 2990:
case 3663:
case 2553:
case 1387:
case 2342:
case 1944:
case 3530:
case 1193:
case 1056:
case 1492:
case 1669:
case 1243:
case 299:
case 2144:
case 3331:
case 61:
case 1791:
case 2476:
case 3143:
case 1561:
case 1764:
case 535:
case 1398:
case 4018:
case 3475:
case 2008:
case 1380:
case 1735:
case 3361:
case 2627:
case 634:
case 276:
case 2869:
case 2489:
case 2657:
case 1834:
case 2213:
case 1163:
case 760:
case 3468:
case 221:
case 2625:
case 2702:
case 1110:
case 458:
case 1720:
case 501:
case 2575:
case 2545:
case 3355:
case 1064:
case 3501:
case 3029:
case 1112:
case 3241:
case 775:
case 342:
case 310:
case 3645:
case 3424:
case 2970:
case 1072:
case 152:
case 3829:
case 2508:
case 2931:
case 499:
case 1623:
case 1906:
case 3592:
case 2199:
case 3326:
case 1599:
case 3776:
case 3742:
case 3334:
case 2537:
case 632:
case 2701:
case 1295:
case 3068:
case 2513:
case 3664:
case 3453:
case 3146:
case 3684:
case 4094:
case 1666:
case 126:
case 1195:
case 1421:
case 985:
case 2105:
case 489:
case 2189:
case 1975:
case 3147:
case 705:
case 1707:
case 677:
case 1644:
case 1300:
case 2101:
case 115:
case 3899:
case 2261:
case 3771:
case 1678:
case 94:
case 1557:
case 2100:
case 2664:
case 3052:
case 994:
case 3845:
case 1343:
case 847:
case 3033:
case 2041:
case 3665:
case 1658:
case 2212:
case 4044:
case 403:
case 2730:
case 3777:
case 2571:
case 3297:
case 396:
case 619:
case 217:
case 1612:
case 348:
case 980:
case 772:
case 1266:
case 3655:
case 2287:
case 3528:
case 918:
case 1622:
case 2044:
case 2159:
case 1831:
case 2805:
case 3799:
case 3647:
case 3633:
case 1989:
case 2506:
case 3920:
case 1604:
case 1006:
case 3417:
case 893:
case 3744:
case 3881:
case 302:
case 3133:
case 355:
case 2257:
case 410:
case 2118:
case 2057:
case 2796:
case 1426:
case 1688:
case 1373:
case 185:
case 2326:
case 1134:
case 419:
case 1778:
case 3192:
case 316:
case 3784:
case 142:
case 3812:
case 3681:
case 3236:
case 1812:
case 3292:
case 3723:
case 3958:
case 246:
case 1272:
case 260:
case 1531:
case 3796:
case 580:
case 321:
case 988:
case 2394:
case 2774:
case 2236:
case 3853:
case 1942:
case 938:
case 1329:
case 3820:
case 1827:
case 503:
case 3657:
case 1605:
case 1949:
case 3325:
case 1276:
case 2916:
case 860:
case 1066:
case 2837:
case 3667:
case 3856:
case 4081:
case 1727:
case 3854:
case 987:
case 3197:
case 2384:
case 800:
case 872:
case 722:
case 3896:
case 2891:
case 2444:
case 2065:
case 1866:
case 18:
case 3934:
case 2291:
case 4060:
case 1997:
case 2217:
case 3319:
case 2419:
case 2794:
case 2438:
case 694:
case 2420:
case 2699:
case 3867:
case 2588:
case 1320:
case 1894:
case 824:
case 3242:
case 1126:
case 1263:
case 832:
case 530:
case 700:
case 1801:
case 3718:
case 2514:
case 3155:
case 701:
case 1171:
case 1270:
case 3308:
case 2194:
case 2459:
case 3012:
case 518:
case 3707:
case 464:
case 1951:
case 2596:
case 457:
case 4077:
case 1825:
case 3733:
case 3866:
case 729:
case 345:
case 1381:
case 1415:
case 2013:
case 622:
case 3240:
case 3285:
case 3930:
case 3026:
case 1261:
case 3414:
case 2546:
case 14:
case 3215:
case 473:
case 3698:
case 2324:
case 605:
case 2731:
case 2150:
case 2136:
case 2346:
case 3238:
case 3520:
case 347:
case 2973:
case 3656:
case 197:
case 413:
case 947:
case 776:
case 2517:
case 76:
case 2360:
case 3407:
case 1842:
case 3675:
case 2464:
case 3773:
case 644:
case 136:
case 672:
case 731:
case 3196:
case 1462:
case 3255:
case 1680:
case 1668:
case 2211:
case 2220:
case 713:
case 1141:
case 1487:
case 3107:
case 3709:
case 821:
case 3933:
case 3409:
case 3256:
case 3448:
case 1286:
case 160:
case 3558:
case 3162:
case 2285:
case 3405:
case 3635:
case 2819:
case 3288:
case 1907:
case 1969:
case 1209:
case 754:
case 3610:
case 2276:
case 1753:
case 2410:
case 2779:
case 3483:
case 4066:
case 3193:
case 1919:
case 374:
case 2520:
case 4095:
case 559:
case 3616:
case 2706:
case 340:
case 757:
case 3172:
case 1489:
case 2139:
case 617:
case 2981:
case 1041:
case 1704:
case 3846:
case 3686:
case 2313:
case 2748:
case 2455:
case 600:
case 2263:
case 3316:
case 941:
case 1872:
case 3151:
case 3261:
case 2989:
case 3598:
case 3060:
case 1836:
case 72:
case 1410:
case 3989:
case 3010:
case 698:
case 827:
case 2712:
case 3968:
case 3243:
case 433:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1655452801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,1,1,];
var gg_b = "1655452801/";

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
