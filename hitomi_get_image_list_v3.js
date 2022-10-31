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
case 1109:
case 3152:
case 539:
case 2978:
case 3701:
case 3550:
case 1301:
case 1492:
case 3832:
case 4037:
case 240:
case 2419:
case 1467:
case 27:
case 1352:
case 2680:
case 2470:
case 719:
case 1223:
case 2134:
case 3749:
case 2661:
case 2577:
case 2213:
case 618:
case 3771:
case 3657:
case 1651:
case 1431:
case 670:
case 653:
case 3789:
case 30:
case 3700:
case 2190:
case 2291:
case 1569:
case 37:
case 1903:
case 2182:
case 1369:
case 792:
case 1191:
case 1629:
case 3072:
case 2091:
case 3437:
case 4030:
case 1679:
case 3093:
case 2354:
case 2432:
case 751:
case 1163:
case 2590:
case 1654:
case 2578:
case 4090:
case 2652:
case 1164:
case 3972:
case 4006:
case 2306:
case 1277:
case 2390:
case 2149:
case 1379:
case 3066:
case 3203:
case 4093:
case 1853:
case 206:
case 1950:
case 2776:
case 2162:
case 3436:
case 3773:
case 2381:
case 811:
case 1775:
case 3525:
case 2191:
case 2605:
case 3707:
case 3839:
case 873:
case 346:
case 409:
case 19:
case 1812:
case 2981:
case 2976:
case 819:
case 3218:
case 3004:
case 2218:
case 2745:
case 3934:
case 3284:
case 1568:
case 3538:
case 496:
case 391:
case 534:
case 2278:
case 993:
case 1597:
case 894:
case 2768:
case 1297:
case 3563:
case 3951:
case 3409:
case 2181:
case 709:
case 868:
case 1433:
case 3422:
case 358:
case 3833:
case 3002:
case 2644:
case 2613:
case 1129:
case 766:
case 3780:
case 2903:
case 2847:
case 1688:
case 1970:
case 91:
case 922:
case 512:
case 3957:
case 2192:
case 1548:
case 621:
case 942:
case 750:
case 2463:
case 3808:
case 107:
case 2258:
case 2421:
case 89:
case 449:
case 2650:
case 2382:
case 1704:
case 711:
case 2105:
case 3543:
case 899:
case 1081:
case 2141:
case 973:
case 2143:
case 454:
case 2634:
case 0:
case 1821:
case 255:
case 578:
case 1581:
case 1685:
case 1020:
case 3741:
case 2188:
case 2932:
case 258:
case 3973:
case 982:
case 445:
case 535:
case 4050:
case 3074:
case 1954:
case 1149:
case 1684:
case 3274:
case 3867:
case 1006:
case 807:
case 2097:
case 2571:
case 1085:
case 687:
case 1896:
case 655:
case 1988:
case 2043:
case 1226:
case 1649:
case 1246:
case 2668:
case 1070:
case 1241:
case 3387:
case 1933:
case 192:
case 2740:
case 2029:
case 2647:
case 112:
case 3893:
case 2449:
case 2693:
case 3787:
case 3967:
case 131:
case 2237:
case 1025:
case 3588:
case 1591:
case 2465:
case 2830:
case 2476:
case 1424:
case 3445:
case 1907:
case 2800:
case 142:
case 2389:
case 1570:
case 3688:
case 2842:
case 3384:
case 1266:
case 1780:
case 75:
case 1292:
case 3429:
case 2343:
case 2053:
case 994:
case 3061:
case 1071:
case 3501:
case 1243:
case 1165:
case 2836:
case 2022:
case 2320:
case 1599:
case 481:
case 1776:
case 3573:
case 447:
case 2844:
case 3052:
case 68:
case 3069:
case 3691:
case 1632:
case 252:
case 3180:
case 2806:
case 2171:
case 1528:
case 3905:
case 1287:
case 86:
case 2940:
case 2252:
case 177:
case 3190:
case 726:
case 1415:
case 1065:
case 532:
case 3294:
case 693:
case 1323:
case 3396:
case 1799:
case 444:
case 1639:
case 3317:
case 3736:
case 1731:
case 3420:
case 387:
case 840:
case 1601:
case 296:
case 2554:
case 3092:
case 2687:
case 1272:
case 1432:
case 2721:
case 1824:
case 3270:
case 1446:
case 2026:
case 1228:
case 2298:
case 833:
case 3280:
case 260:
case 2445:
case 3499:
case 3193:
case 2031:
case 2493:
case 3581:
case 926:
case 1326:
case 1590:
case 3993:
case 174:
case 2315:
case 345:
case 962:
case 2484:
case 349:
case 1705:
case 3405:
case 1383:
case 3844:
case 2027:
case 1233:
case 2998:
case 1976:
case 1414:
case 231:
case 1537:
case 3260:
case 88:
case 1529:
case 1619:
case 1073:
case 2081:
case 1997:
case 2899:
case 3944:
case 176:
case 3101:
case 2395:
case 3278:
case 4:
case 580:
case 187:
case 2533:
case 3234:
case 1394:
case 2490:
case 351:
case 749:
case 3271:
case 2673:
case 2239:
case 1296:
case 2879:
case 3985:
case 2618:
case 106:
case 406:
case 889:
case 10:
case 2132:
case 3511:
case 2477:
case 3621:
case 2859:
case 2505:
case 3125:
case 1752:
case 58:
case 3266:
case 1422:
case 1339:
case 405:
case 1032:
case 643:
case 3086:
case 2845:
case 1487:
case 2601:
case 661:
case 3461:
case 708:
case 3378:
case 3869:
case 210:
case 3025:
case 2750:
case 875:
case 2322:
case 76:
case 2308:
case 1618:
case 2249:
case 1289:
case 92:
case 3337:
case 1095:
case 2114:
case 586:
case 3146:
case 2614:
case 3248:
case 31:
case 1440:
case 2933:
case 1346:
case 911:
case 3710:
case 3988:
case 2025:
case 1435:
case 2851:
case 311:
case 2057:
case 1746:
case 3488:
case 2852:
case 3265:
case 1864:
case 824:
case 2927:
case 1117:
case 3299:
case 703:
case 407:
case 3421:
case 3726:
case 2863:
case 1300:
case 2503:
case 2020:
case 2326:
case 3073:
case 1686:
case 3068:
case 3213:
case 968:
case 2417:
case 2531:
case 3796:
case 3381:
case 102:
case 1155:
case 427:
case 2042:
case 2075:
case 2926:
case 1299:
case 1736:
case 3449:
case 3460:
case 458:
case 3014:
case 1014:
case 2488:
case 3117:
case 2938:
case 541:
case 1050:
case 1157:
case 204:
case 610:
case 1852:
case 1351:
case 1362:
case 2183:
case 1760:
case 190:
case 309:
case 490:
case 1389:
case 3310:
case 1573:
case 6:
case 1993:
case 3558:
case 2393:
case 3966:
case 2532:
case 3752:
case 3683:
case 3116:
case 1477:
case 2288:
case 2982:
case 2413:
case 2058:
case 1322:
case 3247:
case 169:
case 1609:
case 3937:
case 2897:
case 3690:
case 2347:
case 551:
case 1955:
case 143:
case 390:
case 1291:
case 4048:
case 424:
case 1793:
case 158:
case 2794:
case 802:
case 2310:
case 1035:
case 3976:
case 2339:
case 1311:
case 3476:
case 3795:
case 656:
case 475:
case 2564:
case 3478:
case 3866:
case 2537:
case 2885:
case 601:
case 1366:
case 3369:
case 3249:
case 733:
case 1367:
case 3327:
case 820:
case 1693:
case 4089:
case 1762:
case 1769:
case 2774:
case 1114:
case 2769:
case 2365:
case 175:
case 790:
case 2117:
case 3269:
case 314:
case 1782:
case 502:
case 2159:
case 2222:
case 2542:
case 809:
case 2898:
case 2271:
case 2232:
case 1998:
case 403:
case 375:
case 805:
case 3673:
case 757:
case 1088:
case 966:
case 3800:
case 3975:
case 2265:
case 3082:
case 219:
case 3465:
case 253:
case 2286:
case 3663:
case 62:
case 2422:
case 3212:
case 3891:
case 3435:
case 3410:
case 362:
case 3183:
case 1657:
case 1795:
case 3159:
case 439:
case 3803:
case 768:
case 1286:
case 3371:
case 3664:
case 3224:
case 2039:
case 1124:
case 1835:
case 1027:
case 291:
case 2870:
case 3401:
case 1355:
case 3541:
case 1140:
case 529:
case 1242:
case 3281:
case 3686:
case 613:
case 3221:
case 545:
case 2444:
case 927:
case 3216:
case 735:
case 2963:
case 3305:
case 3699:
case 3018:
case 3886:
case 180:
case 1891:
case 967:
case 18:
case 1777:
case 1841:
case 1087:
case 3914:
case 1914:
case 753:
case 2957:
case 2686:
case 2787:
case 747:
case 2596:
case 1093:
case 2795:
case 3928:
case 1737:
case 2560:
case 1485:
case 2840:
case 109:
case 935:
case 1920:
case 315:
case 1190:
case 1558:
case 2009:
case 2706:
case 477:
case 3682:
case 2770:
case 103:
case 1847:
case 2972:
case 1963:
case 1724:
case 2549:
case 3450:
case 96:
case 1258:
case 2876:
case 2142:
case 3880:
case 3045:
case 3524:
case 3918:
case 2051:
case 1745:
case 2314:
case 455:
case 422:
case 2937:
case 3321:
case 2169:
case 1282:
case 3292:
case 4070:
case 369:
case 2280:
case 2707:
case 904:
case 2016:
case 4002:
case 3595:
case 411:
case 2276:
case 3347:
case 1727:
case 3545:
case 2646:
case 400:
case 415:
case 1131:
case 1021:
case 374:
case 3650:
case 3546:
case 3610:
case 810:
case 1587:
case 1578:
case 118:
case 189:
case 619:
case 3665:
case 1260:
case 61:
case 116:
case 2913:
case 2333:
case 1082:
case 3626:
case 2236:
case 3361:
case 1994:
case 930:
case 2085:
case 1643:
case 1545:
case 628:
case 3132:
case 2371:
case 2034:
case 2013:
case 1703:
case 3817:
case 3520:
case 3415:
case 1516:
case 2328:
case 2092:
case 1871:
case 3544:
case 3536:
case 2023:
case 2697:
case 1969:
case 2246:
case 2056:
case 2955:
case 2990:
case 1929:
case 4029:
case 2269:
case 338:
case 2690:
case 2766:
case 397:
case 2139:
case 3219:
case 905:
case 3713:
case 2767:
case 3815:
case 2894:
case 3585:
case 557:
case 3475:
case 348:
case 1572:
case 3239:
case 2676:
case 2888:
case 3852:
case 1330:
case 1772:
case 1495:
case 736:
case 1150:
case 843:
case 3084:
case 473:
case 2515:
case 2792:
case 2257:
case 778:
case 281:
case 1627:
case 4087:
case 2627:
case 3441:
case 2764:
case 1865:
case 3974:
case 4060:
case 2420:
case 1234:
case 3375:
case 2384:
case 1778:
case 1365:
case 2358:
case 1604:
case 1401:
case 1898:
case 2943:
case 2067:
case 564:
case 463:
case 4020:
case 3289:
case 166:
case 1866:
case 3172:
case 861:
case 2819:
case 2332:
case 2108:
case 328:
case 2607:
case 4063:
case 2799:
case 268:
case 2535:
case 3940:
case 3174:
case 1466:
case 3878:
case 2775:
case 1037:
case 48:
case 908:
case 2397:
case 1268:
case 2157:
case 327:
case 888:
case 3200:
case 2950:
case 2716:
case 3009:
case 234:
case 2116:
case 999:
case 1172:
case 2620:
case 276:
case 1470:
case 2224:
case 841:
case 3580:
case 923:
case 1638:
case 207:
case 519:
case 1877:
case 3188:
case 2778:
case 836:
case 2412:
case 2355:
case 587:
case 3609:
case 3693:
case 2107:
case 480:
case 1181:
case 3747:
case 2993:
case 1512:
case 2416:
case 159:
case 1996:
case 3784:
case 934:
case 3215:
case 1176:
case 3785:
case 531:
case 3170:
case 1171:
case 915:
case 3484:
case 1009:
case 1883:
case 1701:
case 1192:
case 1882:
case 3389:
case 1016:
case 3318:
case 3189:
case 1262:
case 2392:
case 869:
case 4009:
case 1502:
case 1631:
case 3734:
case 3076:
case 170:
case 3242:
case 1193:
case 485:
case 939:
case 1051:
case 3884:
case 2660:
case 568:
case 1509:
case 3046:
case 1930:
case 408:
case 1160:
case 2611:
case 1541:
case 3444:
case 162:
case 278:
case 4095:
case 3515:
case 124:
case 464:
case 1694:
case 1361:
case 2901:
case 3026:
case 3030:
case 788:
case 842:
case 2201:
case 2102:
case 4055:
case 1198:
case 3139:
case 3236:
case 1113:
case 2986:
case 864:
case 2341:
case 1932:
case 1774:
case 3128:
case 247:
case 2172:
case 2345:
case 844:
case 1879:
case 3135:
case 2423:
case 3504:
case 265:
case 2786:
case 1961:
case 853:
case 584:
case 701:
case 3256:
case 442:
case 2194:
case 3902:
case 1673:
case 777:
case 134:
case 3192:
case 1656:
case 21:
case 3091:
case 954:
case 1894:
case 2949:
case 4056:
case 3529:
case 1562:
case 3858:
case 863:
case 1336:
case 3943:
case 682:
case 822:
case 694:
case 3205:
case 2474:
case 1608:
case 3223:
case 1115:
case 3599:
case 1259:
case 837:
case 3408:
case 3607:
case 3186:
case 1612:
case 3756:
case 1974:
case 2454:
case 572:
case 1024:
case 546:
case 1002:
case 1583:
case 3376:
case 528:
case 492:
case 1786:
case 1888:
case 2629:
case 3394:
case 2268:
case 3163:
case 1384:
case 1674:
case 2694:
case 731:
case 3841:
case 965:
case 3948:
case 2124:
case 3340:
case 2970:
case 489:
case 3104:
case 3925:
case 2292:
case 2665:
case 3168:
case 1236:
case 310:
case 801:
case 3365:
case 3848:
case 2802:
case 254:
case 4078:
case 2485:
case 3094:
case 1185:
case 2227:
case 2525:
case 912:
case 2074:
case 156:
case 3010:
case 3716:
case 1856:
case 1759:
case 2261:
case 160:
case 920:
case 202:
case 1922:
case 2867:
case 530:
case 267:
case 2272:
case 996:
case 3958:
case 344:
case 720:
case 3424:
case 3770:
case 3344:
case 1240:
case 2638:
case 1691:
case 3676:
case 699:
case 2583:
case 2376:
case 2089:
case 721:
case 1832:
case 543:
case 297:
case 2523:
case 3468:
case 2910:
case 2989:
case 1210:
case 3779:
case 1708:
case 3892:
case 1069:
case 2881:
case 34:
case 1416:
case 2815:
case 2189:
case 3482:
case 2553:
case 282:
case 563:
case 3226:
case 2007:
case 3593:
case 2460:
case 3457:
case 295:
case 1354:
case 3924:
case 3871:
case 3345:
case 2591:
case 3308:
case 306:
case 3023:
case 1935:
case 1064:
case 3738:
case 3949:
case 3513:
case 983:
case 256:
case 3729:
case 2080:
case 1007:
case 592:
case 352:
case 849:
case 497:
case 1699:
case 2304:
case 316:
case 3542:
case 4067:
case 2329:
case 614:
case 2366:
case 1606:
case 717:
case 1106:
case 3757:
case 852:
case 589:
case 2782:
case 779:
case 2228:
case 1586:
case 2204:
case 1331:
case 938:
case 3003:
case 3302:
case 2492:
case 595:
case 45:
case 312:
case 2483:
case 2959:
case 3490:
case 3262:
case 3356:
case 3941:
case 3331:
case 600:
case 1107:
case 3506:
case 1034:
case 466:
case 1554:
case 98:
case 2253:
case 1209:
case 213:
case 590:
case 418:
case 2573:
case 2305:
case 3338:
case 838:
case 3778:
case 323:
case 1872:
case 3295:
case 1908:
case 1975:
case 513:
case 2704:
case 1748:
case 2971:
case 1836:
case 1353:
case 4074:
case 1091:
case 754:
case 3301:
case 3911:
case 3977:
case 1508:
case 1913:
case 1212:
case 1307:
case 3984:
case 814:
case 4044:
case 1584:
case 2813:
case 299:
case 3306:
case 748:
case 2579:
case 3791:
case 2259:
case 1743:
case 2:
case 3081:
case 1206:
case 2002:
case 305:
case 1316:
case 1904:
case 3586:
case 1253:
case 3211:
case 2951:
case 2889:
case 2781:
case 2958:
case 2038:
case 2545:
case 3406:
case 902:
case 1635:
case 1341:
case 3402:
case 1764:
case 3921:
case 3080:
case 3883:
case 1436:
case 2379:
case 4025:
case 1622:
case 2540:
case 1964:
case 2921:
case 1729:
case 2944:
case 3503:
case 851:
case 2522:
case 377:
case 2906:
case 1796:
case 3981:
case 2409:
case 1480:
case 1874:
case 829:
case 647:
case 340:
case 136:
case 3965:
case 251:
case 3210:
case 3077:
case 2321:
case 1642:
case 3416:
case 3619:
case 163:
case 606:
case 3:
case 3575:
case 2217:
case 386:
case 1678:
case 1161:
case 2626:
case 241:
case 2496:
case 945:
case 3359:
case 1135:
case 50:
case 4015:
case 514:
case 3576:
case 3015:
case 1546:
case 2054:
case 3063:
case 2438:
case 1130:
case 3812:
case 293:
case 1033:
case 856:
case 308:
case 46:
case 696:
case 3056:
case 3743:
case 301:
case 3167:
case 2193:
case 1184:
case 2248:
case 321:
case 3900:
case 186:
case 3999:
case 1801:
case 1710:
case 566:
case 969:
case 3038:
case 4005:
case 347:
case 2094:
case 2410:
case 1015:
case 3325:
case 1443:
case 1755:
case 3964:
case 608:
case 1196:
case 3827:
case 184:
case 1344:
case 3754:
case 1668:
case 60:
case 577:
case 2048:
case 1942:
case 1257:
case 3786:
case 3036:
case 3320:
case 2307:
case 3217:
case 1504:
case 1076:
case 1890:
case 631:
case 52:
case 277:
case 423:
case 2945:
case 4083:
case 4000:
case 2348:
case 461:
case 343:
case 208:
case 1840:
case 275:
case 2656:
case 1939:
case 303:
case 2516:
case 2270:
case 470:
case 2462:
case 244:
case 1469:
case 290:
case 3087:
case 2289:
case 2407:
case 1951:
case 2654:
case 1515:
case 1392:
case 581:
case 3714:
case 2860:
case 3102:
case 2715:
case 3744:
case 3685:
case 3635:
case 325:
case 2507:
case 2229:
case 2655:
case 1598:
case 2221:
case 364:
case 367:
case 2144:
case 1559:
case 2461:
case 3728:
case 678:
case 1544:
case 376:
case 3816:
case 1557:
case 4035:
case 3362:
case 2427:
case 3712:
case 2588:
case 3859:
case 3246:
case 2046:
case 1397:
case 3151:
case 2148:
case 2179:
case 3766:
case 2363:
case 2103:
case 3526:
case 479:
case 745:
case 3630:
case 178:
case 2832:
case 1298:
case 285:
case 3053:
case 3426:
case 47:
case 3801:
case 2216:
case 549:
case 783:
case 570:
case 3352:
case 2757:
case 3915:
case 797:
case 2464:
case 917:
case 2352:
case 1029:
case 3141:
case 3496:
case 890:
case 1717:
case 1889:
case 1013:
case 205:
case 2014:
case 2226:
case 1380:
case 1747:
case 104:
case 4054:
case 517:
case 1830:
case 342:
case 332:
case 1473:
case 2714:
case 3303:
case 1630:
case 985:
case 1411:
case 574:
case 3527:
case 2430:
case 3048:
case 832:
case 2865:
case 426:
case 3033:
case 1538:
case 3798:
case 243:
case 1941:
case 3698:
case 1347:
case 2111:
case 2880:
case 3600:
case 1580:
case 3706:
case 2299:
case 3872:
case 2624:
case 471:
case 1683:
case 2914:
case 1577:
case 798:
case 2762:
case 2743:
case 527:
case 2811:
case 2403:
case 1816:
case 3644:
case 3005:
case 1121:
case 1200:
case 2486:
case 2083:
case 1078:
case 2834:
case 3740:
case 2071:
case 1094:
case 665:
case 1345:
case 1450:
case 3001:
case 1398:
case 460:
case 2206:
case 2602:
case 976:
case 229:
case 1565:
case 2112:
case 2886:
case 3704:
case 770:
case 404:
case 1805:
case 1709:
case 1123:
case 1658:
case 1170:
case 700:
case 2234:
case 2378:
case 936:
case 1168:
case 1427:
case 3358:
case 3620:
case 1982:
case 2415:
case 3828:
case 3108:
case 2136:
case 44:
case 1876:
case 2128:
case 2160:
case 1148:
case 3130:
case 1030:
case 3049:
case 3702:
case 505:
case 2309:
case 1373:
case 353:
case 1156:
case 1202:
case 2831:
case 1486:
case 681:
case 961:
case 2373:
case 2301:
case 1926:
case 1229:
case 1530:
case 1738:
case 2323:
case 691:
case 2439:
case 431:
case 3838:
case 322:
case 1075:
case 3126:
case 3540:
case 2447:
case 554:
case 1758:
case 2010:
case 2866:
case 1905:
case 242:
case 1549:
case 3314:
case 335:
case 1274:
case 1564:
case 2973:
case 3254:
case 1043:
case 3432:
case 1386:
case 638:
case 2962:
case 199:
case 2457:
case 2628:
case 2550:
case 3843:
case 2441:
case 3298:
case 688:
case 1514:
case 2567:
case 4042:
case 4069:
case 3678:
case 2952:
case 2593:
case 2077:
case 3452:
case 1636:
case 2610:
case 1948:
case 1869:
case 2632:
case 3727:
case 26:
case 3991:
case 402:
case 2672:
case 1766:
case 3953:
case 2777:
case 2287:
case 3746:
case 3651:
case 3098:
case 3088:
case 2335:
case 2924:
case 3162:
case 3997:
case 2538:
case 525:
case 2133:
case 3670:
case 3029:
case 950:
case 1553:
case 2082:
case 3502:
case 1783:
case 3514:
case 1315:
case 1526:
case 2293:
case 538:
case 3901:
case 2612:
case 1101:
case 1820:
case 3433:
case 2983:
case 462:
case 2405:
case 3214:
case 3539:
case 105:
case 806:
case 698:
case 1676:
case 979:
case 2498:
case 2696:
case 1735:
case 2514:
case 3629:
case 761:
case 3781:
case 289:
case 2096:
case 1497:
case 28:
case 1807:
case 4072:
case 3079:
case 2147:
case 3329:
case 1522:
case 3696:
case 704:
case 467:
case 1919:
case 294:
case 3071:
case 3343:
case 1781:
case 1513:
case 2683:
case 2361:
case 3472:
case 3293:
case 3480:
case 2875:
case 3639:
case 2991:
case 948:
case 669:
case 1858:
case 3717:
case 1118:
case 1623:
case 1402:
case 4075:
case 3286:
case 1412:
case 1634:
case 573:
case 3208:
case 1408:
case 627:
case 152:
case 2129:
case 953:
case 3804:
case 1566:
case 2827:
case 1664:
case 1137:
case 3855:
case 2592:
case 2732:
case 675:
case 771:
case 1677:
case 2884:
case 2346:
case 2281:
case 3492:
case 3597:
case 2709:
case 2969:
case 320:
case 625:
case 671:
case 3350:
case 410:
case 776:
case 2736:
case 1589:
case 3386:
case 2153:
case 2670:
case 1460:
case 1327:
case 2152:
case 3510:
case 1261:
case 981:
case 2313:
case 2198:
case 474:
case 3047:
case 2456:
case 2135:
case 3555:
case 3237:
case 2178:
case 3319:
case 3968:
case 2066:
case 3674:
case 245:
case 758:
case 3243:
case 2325:
case 3903:
case 3313:
case 1145:
case 3523:
case 914:
case 825:
case 1175:
case 3537:
case 1848:
case 2506:
case 2425:
case 4008:
case 1987:
case 468:
case 3959:
case 1279:
case 2558:
case 2594:
case 259:
case 3024:
case 3054:
case 3687:
case 1596:
case 1090:
case 1112:
case 382:
case 845:
case 3912:
case 2196:
case 2295:
case 2065:
case 3960:
case 3107:
case 816:
case 1648:
case 3606:
case 2387:
case 540:
case 1616:
case 2685:
case 506:
case 2302:
case 446:
case 2754:
case 918:
case 443:
case 1834:
case 1958:
case 4039:
case 146:
case 3175:
case 49:
case 1672:
case 1563:
case 2543:
case 763:
case 1451:
case 3140:
case 2703:
case 710:
case 2458:
case 2283:
case 3032:
case 951:
case 3790:
case 2728:
case 2979:
case 2003:
case 3230:
case 567:
case 738:
case 1594:
case 1787:
case 2090:
case 3631:
case 3366:
case 1138:
case 398:
case 2469:
case 3007:
case 2145:
case 2730:
case 155:
case 429:
case 925:
case 3735:
case 1860:
case 3733:
case 2749:
case 230:
case 3123:
case 117:
case 90:
case 883:
case 1026:
case 3568:
case 1284:
case 2008:
case 576:
case 1047:
case 3383:
case 1925:
case 3083:
case 1404:
case 679:
case 2534:
case 2980:
case 3455:
case 597:
case 1247:
case 2113:
case 173:
case 3750:
case 183:
case 1239:
case 1092:
case 12:
case 249:
case 2045:
case 2331:
case 2637:
case 2012:
case 3882:
case 2904:
case 1457:
case 1359:
case 2780:
case 1278:
case 2437:
case 2953:
case 3028:
case 4088:
case 2472:
case 596:
case 718:
case 1406:
case 987:
case 4058:
case 1062:
case 1916:
case 2595:
case 2408:
case 2942:
case 588:
case 330:
case 1127:
case 317:
case 2818:
case 237:
case 2837:
case 3442:
case 3830:
case 1462:
case 393:
case 3288:
case 3625:
case 2557:
case 2475:
case 1488:
case 972:
case 518:
case 246:
case 2101:
case 2966:
case 2817:
case 1822:
case 2424:
case 1096:
case 412:
case 3194:
case 697:
case 1811:
case 3370:
case 2887:
case 3970:
case 963:
case 3898:
case 3228:
case 3277:
case 548:
case 1753:
case 84:
case 2576:
case 553:
case 1028:
case 3894:
case 1319:
case 2843:
case 1791:
case 1265:
case 1902:
case 1785:
case 1318:
case 946:
case 998:
case 2155:
case 2753:
case 4052:
case 1119:
case 2857:
case 2244:
case 3571:
case 3931:
case 3592:
case 3711:
case 3689:
case 4094:
case 334:
case 179:
case 1536:
case 2742:
case 1227:
case 2584:
case 465:
case 3467:
case 2212:
case 3602:
case 3547:
case 3360:
case 3430:
case 2166:
case 1952:
case 2359:
case 3227:
case 3567:
case 1230:
case 1337:
case 1893:
case 654:
case 499:
case 2705:
case 2060:
case 1983:
case 378:
case 1521:
case 3829:
case 585:
case 604:
case 1927:
case 3732:
case 2712:
case 2688:
case 1356:
case 1662:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1667224801/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,1,1,0,1,1,0,1,0,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,0,1,1,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,1,0,1,0,0,0,1,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,0,0,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,0,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,1,0,1,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,0,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,1,1,1,0,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,1,1,1,0,1,1,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,0,0,0,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,1,1,1,0,0,1,1,1,];
var gg_b = "1667224801/";

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
