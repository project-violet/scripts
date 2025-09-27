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
case 3694:
case 2659:
case 1696:
case 3928:
case 122:
case 4053:
case 3662:
case 3751:
case 565:
case 2475:
case 1780:
case 2844:
case 2917:
case 169:
case 2345:
case 815:
case 3481:
case 16:
case 866:
case 735:
case 3184:
case 686:
case 1729:
case 2833:
case 2866:
case 192:
case 3228:
case 286:
case 255:
case 3413:
case 1820:
case 2077:
case 2717:
case 1013:
case 1980:
case 216:
case 2166:
case 3422:
case 2605:
case 2371:
case 616:
case 3884:
case 2310:
case 1273:
case 3598:
case 665:
case 2133:
case 948:
case 2441:
case 885:
case 2144:
case 856:
case 172:
case 3852:
case 1280:
case 3594:
case 3888:
case 2559:
case 1596:
case 2803:
case 1115:
case 2151:
case 1268:
case 3860:
case 4001:
case 109:
case 1581:
case 3948:
case 3550:
case 1992:
case 1246:
case 3933:
case 1096:
case 2788:
case 3244:
case 3966:
case 2325:
case 2458:
case 1964:
case 3266:
case 1749:
case 3319:
case 3944:
case 1891:
case 3817:
case 1042:
case 2677:
case 3098:
case 3248:
case 2784:
case 1840:
case 1622:
case 4027:
case 2128:
case 1249:
case 844:
case 2005:
case 2952:
case 1140:
case 3969:
case 4031:
case 3117:
case 3442:
case 2284:
case 2124:
case 331:
case 1462:
case 1768:
case 1494:
case 3496:
case 3203:
case 3269:
case 1746:
case 3650:
case 2288:
case 483:
case 717:
case 1314:
case 1949:
case 2561:
case 1815:
case 824:
case 80:
case 809:
case 2330:
case 2113:
case 2691:
case 3573:
case 399:
case 2484:
case 1323:
case 1994:
case 3841:
case 1033:
case 2754:
case 2640:
case 2822:
case 3799:
case 1962:
case 1628:
case 1066:
case 2221:
case 3580:
case 3175:
case 1551:
case 2921:
case 2515:
case 1861:
case 362:
case 508:
case 3296:
case 1294:
case 32:
case 2782:
case 304:
case 2488:
case 1998:
case 2758:
case 2089:
case 1624:
case 3526:
case 1524:
case 144:
case 3796:
case 2300:
case 3444:
case 379:
case 2881:
case 1446:
case 3374:
case 1161:
case 1376:
case 2540:
case 874:
case 2958:
case 2122:
case 3141:
case 2982:
case 2086:
case 1492:
case 1798:
case 208:
case 3448:
case 2591:
case 2813:
case 3673:
case 346:
case 2254:
case 3299:
case 3190:
case 3137:
case 822:
case 1633:
case 3692:
case 2040:
case 3664:
case 2199:
case 4070:
case 658:
case 1666:
case 115:
case 3222:
case 3549:
case 869:
case 51:
case 1648:
case 3713:
case 258:
case 2620:
case 2941:
case 1357:
case 4083:
case 1859:
case 998:
case 3309:
case 1334:
case 3668:
case 3158:
case 1835:
case 912:
case 3922:
case 3451:
case 818:
case 2775:
case 333:
case 2990:
case 302:
case 1644:
case 3646:
case 892:
case 28:
case 2460:
case 21:
case 3546:
case 3080:
case 2015:
case 888:
case 1135:
case 4095:
case 982:
case 2589:
case 3424:
case 2196:
case 354:
case 3281:
case 1159:
case 268:
case 1950:
case 58:
case 872:
case 2520:
case 2417:
case 3073:
case 156:
case 2790:
case 3564:
case 3355:
case 945:
case 3306:
case 668:
case 3854:
case 3213:
case 2741:
case 3339:
case 2686:
case 3592:
case 1533:
case 3837:
case 3292:
case 435:
case 2173:
case 862:
case 278:
case 1944:
case 3513:
case 2690:
case 2021:
case 3749:
case 245:
case 3264:
case 3840:
case 2989:
case 126:
case 82:
case 1499:
case 1098:
case 2786:
case 2129:
case 2920:
case 309:
case 324:
case 1948:
case 3115:
case 2289:
case 2575:
case 3268:
case 282:
case 1966:
case 1062:
case 1703:
case 682:
case 1769:
case 919:
case 3992:
case 1244:
case 2007:
case 528:
case 91:
case 3494:
case 98:
case 4025:
case 989:
case 698:
case 131:
case 3462:
case 2435:
case 3949:
case 2301:
case 2675:
case 3815:
case 149:
case 1269:
case 1650:
case 2829:
case 3792:
case 1903:
case 3498:
case 228:
case 958:
case 3249:
case 1766:
case 3140:
case 2054:
case 3764:
case 3318:
case 2590:
case 628:
case 582:
case 87:
case 1117:
case 2720:
case 1442:
case 2873:
case 1924:
case 2864:
case 2365:
case 3599:
case 2554:
case 3186:
case 2291:
case 2041:
case 2537:
case 3729:
case 2892:
case 3773:
case 802:
case 1413:
case 3642:
case 318:
case 2149:
case 2621:
case 2240:
case 322:
case 2868:
case 1928:
case 1152:
case 3889:
case 2940:
case 1662:
case 1694:
case 284:
case 1188:
case 2607:
case 487:
case 2582:
case 3450:
case 36:
case 1224:
case 372:
case 4045:
case 2146:
case 359:
case 1050:
case 1594:
case 783:
case 3929:
case 214:
case 2507:
case 1251:
case 3280:
case 1562:
case 3302:
case 2915:
case 2521:
case 2849:
case 1951:
case 3120:
case 388:
case 3542:
case 3229:
case 1598:
case 1385:
case 3886:
case 710:
case 2637:
case 2740:
case 1026:
case 2552:
case 2261:
case 3835:
case 2862:
case 3357:
case 2588:
case 3859:
case 164:
case 3569:
case 1363:
case 3503:
case 3644:
case 3750:
case 1646:
case 133:
case 3480:
case 1664:
case 3338:
case 905:
case 1154:
case 2277:
case 2584:
case 1137:
case 3648:
case 3473:
case 315:
case 2961:
case 1549:
case 130:
case 1649:
case 385:
case 2777:
case 1981:
case 1029:
case 1213:
case 2370:
case 2198:
case 3533:
case 1837:
case 3856:
case 2440:
case 2311:
case 3566:
case 1722:
case 1854:
case 1080:
case 1913:
case 3250:
case 1107:
case 1281:
case 154:
case 3603:
case 3159:
case 3135:
case 3426:
case 2162:
case 1424:
case 2383:
case 3044:
case 1296:
case 2259:
case 1175:
case 2235:
case 3551:
case 3861:
case 162:
case 1626:
case 1068:
case 3624:
case 12:
case 104:
case 1403:
case 1469:
case 3048:
case 896:
case 3379:
case 2617:
case 3877:
case 595:
case 438:
case 1064:
case 965:
case 916:
case 3066:
case 648:
case 3323:
case 1841:
case 675:
case 3994:
case 2486:
case 1141:
case 3492:
case 831:
case 986:
case 1378:
case 84:
case 1190:
case 2256:
case 849:
case 1742:
case 3177:
case 1448:
case 2420:
case 2088:
case 344:
case 1796:
case 3003:
case 1526:
case 2052:
case 2905:
case 3762:
case 337:
case 2735:
case 1680:
case 3651:
case 3376:
case 152:
case 876:
case 711:
case 3446:
case 2850:
case 2627:
case 745:
case 1085:
case 1738:
case 778:
case 1908:
case 1432:
case 3206:
case 4077:
case 1743:
case 2297:
case 2878:
case 3618:
case 1672:
case 3255:
case 2531:
case 3313:
case 1519:
case 3763:
case 161:
case 3906:
case 3955:
case 1734:
case 1487:
case 3614:
case 2874:
case 1208:
case 373:
case 2601:
case 2375:
case 2445:
case 800:
case 3263:
case 3236:
case 1234:
case 2501:
case 151:
case 1938:
case 712:
case 3830:
case 465:
case 1619:
case 2390:
case 393:
case 1238:
case 728:
case 2178:
case 3322:
case 2797:
case 3032:
case 1093:
case 2065:
case 3755:
case 3963:
case 2410:
case 2527:
case 3909:
case 3485:
case 1957:
case 3018:
case 583:
case 2027:
case 2337:
case 2839:
case 1723:
case 680:
case 2855:
case 2354:
case 197:
case 3897:
case 1811:
case 1912:
case 784:
case 213:
case 3978:
case 127:
case 2163:
case 2109:
case 2653:
case 2382:
case 2425:
case 101:
case 2136:
case 3274:
case 3602:
case 3587:
case 341:
case 1362:
case 2553:
case 1394:
case 1923:
case 683:
case 1895:
case 339:
case 1979:
case 2700:
case 850:
case 2930:
case 1776:
case 1414:
case 580:
case 714:
case 834:
case 3632:
case 1398:
case 4056:
case 2230:
case 1585:
case 3342:
case 1019:
case 1223:
case 1418:
case 210:
case 3778:
case 2547:
case 3472:
case 2031:
case 917:
case 3145:
case 897:
case 3557:
case 2388:
case 4089:
case 1563:
case 3867:
case 3303:
case 1509:
case 2595:
case 3534:
case 2352:
case 1214:
case 2683:
case 1536:
case 160:
case 1078:
case 3916:
case 1847:
case 1349:
case 1914:
case 3719:
case 2430:
case 827:
case 1479:
case 2670:
case 1423:
case 2384:
case 801:
case 2885:
case 1655:
case 3604:
case 3272:
case 3538:
case 1165:
case 391:
case 1606:
case 1555:
case 3638:
case 3171:
case 4086:
case 2893:
case 3366:
case 2925:
case 1865:
case 1506:
case 3023:
case 2185:
case 877:
case 1392:
case 3079:
case 3478:
case 150:
case 3643:
case 408:
case 3634:
case 1368:
case 1636:
case 3167:
case 3657:
case 1663:
case 1609:
case 2695:
case 2400:
case 3919:
case 1346:
case 3845:
case 3474:
case 163:
case 1714:
case 1476:
case 1457:
case 2910:
case 367:
case 1434:
case 2971:
case 3008:
case 2083:
case 3125:
case 1380:
case 2816:
case 2745:
case 2267:
case 681:
case 1827:
case 775:
case 1329:
case 2070:
case 4040:
case 1055:
case 748:
case 3793:
case 511:
case 100:
case 2271:
case 1131:
case 2119:
case 1373:
case 3679:
case 1578:
case 1232:
case 3043:
case 3038:
case 935:
case 3406:
case 2497:
case 3328:
case 3785:
case 3623:
case 851:
case 3439:
case 2360:
case 4015:
case 103:
case 2116:
case 1287:
case 1101:
case 41:
case 132:
case 1932:
case 1408:
case 1326:
case 3034:
case 3825:
case 211:
case 0:
case 1036:
case 795:
case 2767:
case 1063:
case 8:
case 2545:
case 3016:
case 327:
case 1978:
case 3883:
case 1602:
case 2134:
case 2157:
case 3779:
case 1419:
case 4021:
case 2143:
case 3072:
case 2431:
case 235:
case 2356:
case 3212:
case 2305:
case 786:
case 807:
case 755:
case 3685:
case 871:
case 716:
case 765:
case 3170:
case 1632:
case 2843:
case 1472:
case 1342:
case 3223:
case 4058:
case 2359:
case 3394:
case 3923:
case 3895:
case 2834:
case 141:
case 1687:
case 2108:
case 2335:
case 498:
case 3414:
case 2401:
case 1774:
case 981:
case 3979:
case 412:
case 13:
case 287:
case 2911:
case 484:
case 3734:
case 1002:
case 3904:
case 3757:
case 3350:
case 1381:
case 2283:
case 3208:
case 2876:
case 1493:
case 3908:
case 2071:
case 2010:
case 2123:
case 867:
case 3085:
case 3519:
case 2211:
case 1618:
case 3743:
case 2812:
case 1255:
case 3572:
case 3238:
case 193:
case 2447:
case 170:
case 1830:
case 2879:
case 1739:
case 2770:
case 857:
case 1485:
case 1936:
case 587:
case 3704:
case 3934:
case 3943:
case 1236:
case 2361:
case 3516:
case 2045:
case 351:
case 3708:
case 1087:
case 3938:
case 3402:
case 910:
case 2765:
case 3055:
case 3438:
case 1793:
case 2247:
case 2097:
case 3006:
case 3329:
case 2953:
case 890:
case 1285:
case 873:
case 4017:
case 300:
case 3131:
case 3434:
case 1008:
case 983:
case 1985:
case 2495:
case 1409:
case 1463:
case 2947:
case 1351:
case 2814:
case 3202:
case 3801:
case 303:
case 3101:
case 870:
case 2500:
case 1057:
case 2753:
case 3009:
case 1993:
case 3408:
case 3932:
case 913:
case 1825:
case 3326:
case 2965:
case 2483:
case 2265:
case 3232:
case 2747:
case 1512:
case 2118:
case 2630:
case 2391:
case 1785:
case 1439:
case 3987:
case 3404:
case 1455:
case 2340:
case 238:
case 3479:
case 2731:
case 3078:
case 1012:
case 448:
case 2132:
case 758:
case 3165:
case 1604:
case 1272:
case 3218:
case 2697:
case 638:
case 1810:
case 121:
case 3918:
case 789:
case 107:
case 1216:
case 1608:
case 1534:
case 2802:
case 3214:
case 3536:
case 1303:
case 2927:
case 334:
case 3153:
case 1634:
case 1508:
case 4088:
case 171:
case 1716:
case 3714:
case 1344:
case 1845:
case 1023:
case 3392:
case 1110:
case 2231:
case 3555:
case 768:
case 1171:
case 1504:
case 1638:
case 2597:
case 4084:
case 1478:
case 83:
case 1772:
case 3718:
case 839:
case 1348:
case 1079:
case 2320:
case 1311:
case 3397:
case 2564:
case 1440:
case 630:
case 1198:
case 4038:
case 3686:
case 2592:
case 2837:
case 1370:
case 2029:
case 2213:
case 1684:
case 750:
case 3741:
case 1777:
case 4043:
case 2121:
case 3790:
case 3975:
case 230:
case 3589:
case 2424:
case 2568:
case 3275:
case 1194:
case 457:
case 2882:
case 3196:
case 763:
case 90:
case 3015:
case 2080:
case 530:
case 3775:
case 443:
case 2646:
case 38:
case 974:
case 1977:
case 2781:
case 3896:
case 1395:
case 4008:
case 2807:
case 467:
case 1588:
case 264:
case 1862:
case 1552:
case 2158:
case 2549:
case 2821:
case 3091:
case 3241:
case 3586:
case 4004:
case 2692:
case 1898:
case 2137:
case 760:
case 2664:
case 3040:
case 3199:
case 2154:
case 436:
case 812:
case 2742:
case 308:
case 2448:
case 1256:
case 2049:
case 562:
case 2190:
case 4079:
case 3254:
case 2378:
case 1205:
case 4023:
case 3958:
case 125:
case 3086:
case 2629:
case 504:
case 279:
case 3881:
case 3300:
case 59:
case 3282:
case 27:
case 2444:
case 3615:
case 2374:
case 195:
case 3258:
case 828:
case 2526:
case 3954:
case 652:
case 3707:
case 1088:
case 703:
case 2796:
case 2403:
case 407:
case 959:
case 3782:
case 204:
case 3488:
case 3089:
case 2626:
case 604:
case 878:
case 1235:
case 2046:
case 4076:
case 1150:
case 2841:
case 1486:
case 988:
case 3737:
case 2996:
case 3484:
case 699:
case 2064:
case 1935:
case 3640:
case 3822:
case 552:
case 175:
case 3691:
case 3020:
case 579:
case 1617:
case 148:
case 882:
case 29:
case 631:
case 2650:
case 2744:
case 2203:
case 751:
case 439:
case 1058:
case 649:
case 3124:
case 231:
case 1789:
case 3984:
case 895:
case 3577:
case 1873:
case 2748:
case 1720:
case 1286:
case 915:
case 1054:
case 3128:
case 128:
case 3988:
case 2733:
case 1327:
case 3437:
case 1129:
case 3784:
case 1220:
case 1786:
case 226:
case 3454:
case 1405:
case 1989:
case 985:
case 1456:
case 1331:
case 1690:
case 2944:
case 2319:
case 2817:
case 2233:
case 549:
case 3482:
case 1007:
case 3788:
case 2244:
case 2094:
case 696:
case 3059:
case 3458:
case 3035:
case 2966:
case 3325:
case 942:
case 1826:
case 848:
case 1180:
case 3661:
case 182:
case 576:
case 3151:
case 296:
case 1289:
case 2948:
case 1168:
case 2562:
case 2724:
case 3869:
case 3803:
case 114:
case 3367:
case 423:
case 2594:
case 2888:
case 4087:
case 3559:
case 777:
case 3144:
case 3760:
case 2050:
case 1146:
case 1075:
case 3371:
case 3605:
case 3166:
case 2728:
case 2385:
case 3441:
case 2884:
case 3133:
case 4032:
case 1192:
case 3148:
case 3717:
case 470:
case 1791:
case 493:
case 1849:
case 2951:
case 1347:
case 1521:
case 355:
case 1240:
case 2413:
case 3077:
case 1041:
case 1892:
case 3833:
case 2698:
case 3505:
case 3866:
case 1554:
case 1864:
case 3061:
case 2751:
case 937:
case 3475:
case 2224:
case 3345:
case 944:
case 3917:
case 490:
case 701:
case 727:
case 3260:
case 3659:
case 3103:
case 2152:
case 3635:
case 1940:
case 1558:
case 1868:
case 2928:
case 1615:
case 2376:
case 1258:
case 2651:
case 3850:
case 2446:
case 1282:
case 1300:
case 805:
case 757:
case 244:
case 3088:
case 3489:
case 434:
case 3052:
case 2468:
case 3735:
case 1721:
case 2312:
case 1591:
case 1813:
case 450:
case 1237:
case 108:
case 740:
case 1982:
case 2528:
case 1122:
case 1540:
case 325:
case 1958:
case 2464:
case 3756:
case 1221:
case 1640:
case 2962:
case 606:
case 2033:
case 1737:
case 1020:
case 2379:
case 2298:
case 1330:
case 1113:
case 2449:
case 206:
case 1089:
case 1758:
case 1452:
case 2998:
case 1782:
case 4074:
case 2294:
case 1207:
case 3660:
case 2044:
case 1921:
case 2551:
case 2669:
case 2603:
case 2159:
case 4036:
case 1589:
case 2308:
case 3652:
case 2135:
case 1275:
case 3162:
case 2426:
case 1015:
case 566:
case 515:
case 2051:
case 816:
case 11:
case 432:
case 656:
case 3198:
case 3684:
case 3370:
case 736:
case 1741:
case 2566:
case 3311:
case 1899:
case 2304:
case 3440:
case 2856:
case 285:
case 1790:
case 1975:
case 256:
case 1520:
case 3491:
case 3777:
case 168:
case 2950:
case 1620:
case 791:
case 3017:
case 158:
case 1241:
case 2343:
case 215:
case 1290:
case 2156:
case 1199:
case 976:
case 1586:
case 4055:
case 615:
case 3898:
case 3277:
case 4006:
case 2429:
case 2644:
case 189:
case 707:
case 3415:
case 585:
case 2480:
case 2024:
case 1689:
case 3862:
case 2334:
case 3552:
case 3261:
case 2569:
case 721:
case 3894:
case 99:
case 2273:
case 1310:
case 1133:
case 3164:
case 688:
case 522:
case 2980:
case 81:
case 3915:
case 1490:
case 3477:
case 1148:
case 2229:
case 3791:
case 1869:
case 2596:
case 3682:
case 3507:
case 672:
case 3353:
case 1559:
case 1535:
case 2280:
case 73:
case 2302:
case 2189:
case 65:
case 3215:
case 3075:
case 868:
case 272:
case 2081:
case 1144:
case 92:
case 1760:
case 25:
case 929:
case 2450:
case 1345:
case 26:
case 3991:
case 1917:
case 1061:
case 1475:
case 858:
case 2889:
case 1635:
case 3940:
case 3558:
case 952:
case 3582:
case 1260:
case 1103:
case 384:
case 1960:
case 2820:
case 55:
case 2642:
case 559:
case 2773:
case 3240:
case 3090:
case 572:
case 2926:
case 946:
case 618:
case 3864:
case 4085:
case 3041:
case 692:
case 1833:
case 3291:
case 2318:
case 1284:
case 2613:
case 524:
case 1577:
case 3286:
case 3541:
case 328:
case 793:
case 3037:
case 2792:
case 3829:
case 2498:
case 1952:
case 3054:
case 1056:
case 2522:
case 3675:
case 1561:
case 2815:
case 808:
case 2314:
case 2949:
case 3880:
case 1851:
case 312:
case 723:
case 398:
case 1288:
case 2746:
case 1407:
case 274:
case 477:
case 3459:
case 2494:
case 2462:
case 2768:
case 933:
case 3058:
case 1124:
case 3789:
case 1035:
case 2964:
case 609:
case 1752:
case 1325:
case 2096:
case 773:
case 401:
case 3007:
case 1788:
case 20:
case 3920:
case 427:
case 209:
case 1661:
case 3575:
case 2268:
case 2115:
case 3289:
case 2968:
case 1454:
case 3456:
case 3989:
case 2840:
case 2622:
case 3641:
case 3129:
case 1784:
case 294:
case 574:
case 3220:
case 720:
case 1677:
case 2292:
case 2946:
case 3173:
case 4072:
case 3690:
case 2324:
case 927:
case 3245:
case 2057:
case 4080:
case 1500:
case 901:
case 1114:
case 2406:
case 3497:
case 2455:
case 1340:
case 640:
case 3710:
case 817:
case 1630:
case 2512:
case 1118:
case 543:
case 997:
case 1265:
case 4073:
case 1747:
case 2293:
case 3872:
case 3119:
case 706:
case 3011:
case 2793:
case 1247:
case 2004:
case 1947:
case 2351:
case 540:
case 977:
case 433:
case 1253:
case 1495:
case 2985:
case 464:
case 2436:
case 3083:
case 2845:
case 671:
case 2344:
case 47:
case 2716:
case 479:
case 3583:
case 591:
case 271:
case 2508:
case 3695:
case 2079:
case 2348:
case 2643:
case 2478:
case 1597:
case 1231:
case 2638:
case 2110:
case 1727:
case 2023:
case 766:
case 3670:
case 715:
case 3384:
case 2871:
case 3611:
case 3193:
case 1132:
case 2538:
case 49:
case 2543:
case 9:
case 1731:
case 1227:
case 138:
case 3430:
case 3595:
case 4068:
case 3388:
case 3683:
case 1802:
case 42:
case 1187:
case 2216:
case 2534:
case 2608:
case 221:
case 4046:
case 607:
case 2145:
case 1000:
case 2342:
case 3547:
case 2632:
case 1104:
case 788:
case 1427:
case 1510:
case 641:
case 3700:
case 239:
case 2774:
case 2416:
case 449:
case 383:
case 2502:
case 639:
case 241:
case 1025:
case 63:
case 431:
case 2396:
case 3553:
case 1857:
case 772:
case 3382:
case 1157:
case 3163:
case 3109:
case 3653:
case 2602:
case 2274:
case 903:
case 4094:
case 932:
case 3425:
case 3136:
case 838:
case 313:
case 3001:
case 2978:
case 2014:
case 1545:
case 722:
case 3337:
case 3839:
case 3027:
case 792:
case 1610:
case 3354:
case 2532:
case 718:
case 2897:
case 2278:
case 3565:
case 1804:
case 3647:
case 135:
case 2974:
case 380:
case 2419:
case 53:
case 539:
case 3471:
case 2706:
case 1711:
case 2485:
case 1823:
case 2963:
case 2739:
case 693:
case 1995:
case 1377:
case 1879:
case 1447:
case 3178:
case 3390:
case 117:
case 520:
case 953:
case 1783:
case 3467:
case 2100:
case 1045:
case 623:
case 2263:
case 774:
case 3174:
case 1361:
case 4050:
case 2236:
case 1176:
case 290:
case 593:
case 3375:
case 1283:
case 3874:
case 934:
case 2381:
case 1795:
case 3053:
case 2939:
case 2763:
case 690:
case 2002:
case 2736:
case 187:
case 1525:
case 2906:
case 3047:
case 2255:
case 3531:
case 1211:
case 3878:
case 2618:
case 2313:
case 620:
case 2239:
case 1123:
case 2493:
case 220:
case 1071:
case 2718:
case 2412:
case 2147:
case 883:
case 3727:
case 2539:
case 1570:
case 1185:
case 1511:
case 2865:
case 3231:
case 1225:
case 2714:
case 2476:
case 754:
case 3701:
case 560:
case 1400:
case 2153:
case 663:
case 2609:
case 1695:
case 1583:
case 3389:
case 2636:
case 444:
case 4003:
case 4069:
case 1683:
case 2536:
case 3201:
case 1352:
case 2563:
case 3927:
case 2509:
case 733:
case 2853:
case 880:
case 3000:
case 4044:
case 923:
case 2218:
case 993:
case 4033:
case 1193:
case 970:
case 2165:
case 3386:
case 2639:
case 660:
case 534:
case 2479:
case 338:
case 260:
case 2078:
case 3901:
case 563:
case 1710:
case 3411:
case 3118:
case 2831:
case 3265:
case 1172:
case 2578:
case 1317:
case 456:
case 3630:
case 752:
case 1245:
case 2036:
case 2408:
case 2932:
case 3965:
case 3114:
case 203:
case 2101:
case 2574:
case 500:
case 1116:
case 3253:
case 3600:
case 1816:
case 3814:
case 72:
case 2674:
case 2434:
case 1971:
case 939:
case 1910:
case 2457:
case 2373:
case 415:
case 1872:
case 2443:
case 2678:
case 3097:
case 799:
case 2902:
case 2732:
case 1070:
case 1467:
case 317:
case 74:
case 2402:
case 251:
case 3625:
case 2234:
case 459:
case 907:
case 2516:
case 3361:
case 2943:
case 4081:
case 2257:
case 731:
case 3295:
case 3770:
case 776:
case 1341:
case 811:
case 1527:
case 3995:
case 1471:
case 2093:
case 2704:
case 1065:
case 3711:
case 2:
case 561:
case 2243:
case 488:
case 1178:
case 4013:
case 991:
case 6:
case 3377:
case 3879:
case 492:
case 726:
case 3812:
case 1047:
case 2204:
case 1531:
case 3211:
case 418:
case 1297:
case 3465:
case 3071:
case 3983:
case 3123:
case 4022:
case 2085:
case 3010:
case 2208:
case 3876:
case 1601:
case 46:
case 1874:
case 971:
case 3283:
case 2734:
case 2904:
case 1997:
case 387:
case 2757:
case 796:
case 1053:
case 967:
case 3401:
case 1930:
case 677:
case 2923:
case 1863:
case 1553:
case 3857:
case 2362:
case 3108:
case 1836:
case 2183:
case 3025:
case 3834:
case 1547:
case 110:
case 1031:
case 1321:
case 2712:
case 2223:
case 2019:
case 2279:
case 1139:
case 1155:
case 2693:
case 1665:
case 3571:
case 3838:
case 577:
case 940:
case 3305:
case 1565:
case 1855:
case 3804:
case 2723:
case 2685:
case 1027:
case 2779:
case 2072:
case 3431:
case 335:
case 180:
case 4042:
case 3143:
case 2976:
case 1358:
case 3134:
case 201:
case 3808:
case 1382:
case 3667:
case 1200:
case 3157:
case 1653:
case 3545:
case 113:
case 957:
case 2016:
case 1001:
case 40:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1758974401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,0,1,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,0,0,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,];
var gg_b = "1758974401/";

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
