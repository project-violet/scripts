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
case 1524:
case 393:
case 2985:
case 3791:
case 2965:
case 1868:
case 3164:
case 2687:
case 2446:
case 3184:
case 3846:
case 3003:
case 938:
case 3092:
case 1221:
case 2303:
case 3681:
case 302:
case 885:
case 936:
case 1622:
case 2016:
case 1464:
case 1974:
case 2430:
case 3316:
case 3499:
case 633:
case 3875:
case 1536:
case 1409:
case 1263:
case 1484:
case 169:
case 3262:
case 1045:
case 360:
case 582:
case 3115:
case 3514:
case 1557:
case 1277:
case 1038:
case 2380:
case 3649:
case 2766:
case 144:
case 1334:
case 3060:
case 3290:
case 598:
case 596:
case 1578:
case 2673:
case 253:
case 809:
case 3211:
case 3585:
case 2696:
case 101:
case 4066:
case 1928:
case 3565:
case 314:
case 1853:
case 1744:
case 2825:
case 3612:
case 1613:
case 337:
case 207:
case 4063:
case 1361:
case 2429:
case 2947:
case 3235:
case 228:
case 922:
case 2602:
case 2645:
case 2355:
case 4021:
case 3055:
case 466:
case 9:
case 1616:
case 2763:
case 1297:
case 3207:
case 2569:
case 479:
case 2932:
case 752:
case 3829:
case 2504:
case 3550:
case 3270:
case 1087:
case 2721:
case 995:
case 1739:
case 2758:
case 261:
case 3072:
case 3843:
case 3006:
case 115:
case 95:
case 2700:
case 2306:
case 38:
case 1842:
case 1073:
case 3754:
case 2541:
case 167:
case 1266:
case 3479:
case 1312:
case 3131:
case 50:
case 2013:
case 2777:
case 3904:
case 1994:
case 2950:
case 2142:
case 3626:
case 3989:
case 1349:
case 4058:
case 3634:
case 2220:
case 4000:
case 1819:
case 733:
case 24:
case 3248:
case 2443:
case 1431:
case 870:
case 1690:
case 3465:
case 592:
case 723:
case 3975:
case 3658:
case 73:
case 2344:
case 3044:
case 3157:
case 2726:
case 3178:
case 2320:
case 3818:
case 2814:
case 3213:
case 1386:
case 503:
case 1457:
case 2734:
case 431:
case 656:
case 1760:
case 2206:
case 2999:
case 1611:
case 557:
case 8:
case 2151:
case 1988:
case 3930:
case 3370:
case 3702:
case 3952:
case 3599:
case 3307:
case 2925:
case 1436:
case 1584:
case 1953:
case 3140:
case 1564:
case 3745:
case 2530:
case 1223:
case 85:
case 1682:
case 3001:
case 1091:
case 2575:
case 2255:
case 1662:
case 329:
case 3621:
case 2035:
case 238:
case 308:
case 1261:
case 836:
case 355:
case 327:
case 3841:
case 689:
case 2543:
case 3311:
case 4012:
case 3133:
case 961:
case 1358:
case 3039:
case 94:
case 3390:
case 2317:
case 1772:
case 3796:
case 2260:
case 3432:
case 2712:
case 787:
case 4061:
case 2062:
case 63:
case 3216:
case 2691:
case 1383:
case 1919:
case 2082:
case 909:
case 3382:
case 222:
case 3450:
case 400:
case 1635:
case 3408:
case 2203:
case 1498:
case 928:
case 2979:
case 3889:
case 295:
case 1905:
case 2529:
case 1670:
case 2808:
case 756:
case 39:
case 2194:
case 1150:
case 1607:
case 2723:
case 843:
case 1108:
case 1399:
case 578:
case 1507:
case 3309:
case 2510:
case 2445:
case 2009:
case 3088:
case 2064:
case 446:
case 2986:
case 677:
case 2294:
case 766:
case 2476:
case 2493:
case 2966:
case 3298:
case 3315:
case 1920:
case 613:
case 2015:
case 3893:
case 3116:
case 1803:
case 1535:
case 3802:
case 1892:
case 2591:
case 916:
case 3845:
case 2192:
case 452:
case 918:
case 147:
case 2834:
case 196:
case 3679:
case 1751:
case 3838:
case 1880:
case 3426:
case 694:
case 3991:
case 1134:
case 1548:
case 241:
case 721:
case 3159:
case 2997:
case 381:
case 951:
case 1052:
case 1126:
case 26:
case 2695:
case 2714:
case 1459:
case 2826:
case 2438:
case 3566:
case 3233:
case 365:
case 4065:
case 42:
case 1123:
case 804:
case 2881:
case 2487:
case 3769:
case 3122:
case 110:
case 3789:
case 3521:
case 530:
case 2467:
case 3704:
case 2823:
case 1562:
case 3563:
case 1855:
case 1939:
case 280:
case 621:
case 1582:
case 1422:
case 3423:
case 841:
case 2630:
case 2228:
case 3887:
case 3481:
case 3461:
case 2527:
case 1029:
case 2031:
case 812:
case 4032:
case 3896:
case 1872:
case 1806:
case 3042:
case 10:
case 3331:
case 1112:
case 2652:
case 3625:
case 1285:
case 135:
case 2305:
case 3927:
case 1095:
case 2251:
case 164:
case 3005:
case 1413:
case 975:
case 2921:
case 1590:
case 2274:
case 3500:
case 1149:
case 1753:
case 2219:
case 1844:
case 2725:
case 2374:
case 2078:
case 941:
case 3902:
case 3357:
case 1992:
case 1559:
case 3466:
case 2144:
case 3993:
case 1903:
case 3486:
case 3647:
case 3148:
case 192:
case 1820:
case 1018:
case 2866:
case 2351:
case 4025:
case 3526:
case 2205:
case 125:
case 157:
case 904:
case 3632:
case 2886:
case 96:
case 3231:
case 554:
case 1365:
case 1186:
case 2242:
case 0:
case 875:
case 3650:
case 3340:
case 3746:
case 3324:
case 442:
case 890:
case 2491:
case 3170:
case 391:
case 3135:
case 631:
case 218:
case 1516:
case 1407:
case 912:
case 3730:
case 458:
case 863:
case 3336:
case 1788:
case 2410:
case 216:
case 3891:
case 2502:
case 2593:
case 3938:
case 520:
case 1980:
case 186:
case 2101:
case 3333:
case 2033:
case 3111:
case 1041:
case 3512:
case 2779:
case 324:
case 3987:
case 423:
case 2454:
case 3400:
case 3665:
case 818:
case 2573:
case 263:
case 600:
case 816:
case 1225:
case 1177:
case 731:
case 1742:
case 2800:
case 1955:
case 1839:
case 2858:
case 2923:
case 2961:
case 784:
case 2471:
case 2117:
case 3795:
case 1158:
case 2981:
case 2883:
case 1522:
case 3523:
case 2949:
case 2427:
case 3182:
case 489:
case 3215:
case 3581:
case 1308:
case 3421:
case 2098:
case 1089:
case 2394:
case 3094:
case 1004:
case 2288:
case 1482:
case 3264:
case 3973:
case 1624:
case 3284:
case 1462:
case 2268:
case 3996:
case 3209:
case 1972:
case 698:
case 3627:
case 710:
case 1287:
case 2370:
case 647:
case 1267:
case 696:
case 2307:
case 476:
case 1716:
case 2952:
case 2599:
case 1568:
case 1097:
case 3007:
case 2140:
case 993:
case 1824:
case 2745:
case 1588:
case 3530:
case 548:
case 3301:
case 4002:
case 3575:
case 3255:
case 960:
case 2663:
case 206:
case 2621:
case 336:
case 2136:
case 855:
case 338:
case 4045:
case 469:
case 1617:
case 4038:
case 2600:
case 2348:
case 89:
case 1878:
case 3048:
case 1118:
case 2975:
case 343:
case 1639:
case 444:
case 1915:
case 3320:
case 2818:
case 2020:
case 3174:
case 735:
case 3814:
case 1857:
case 177:
case 52:
case 2213:
case 937:
case 1759:
case 2414:
case 1066:
case 113:
case 3552:
case 3206:
case 1984:
case 3865:
case 1273:
case 1553:
case 3885:
case 1964:
case 3151:
case 2930:
case 283:
case 1601:
case 2382:
case 883:
case 322:
case 3404:
case 1494:
case 2450:
case 3489:
case 1293:
case 2787:
case 3979:
case 1202:
case 3761:
case 3850:
case 3781:
case 1327:
case 2995:
case 2869:
case 1189:
case 370:
case 29:
case 3194:
case 4067:
case 1104:
case 3723:
case 4087:
case 871:
case 3610:
case 1169:
case 798:
case 227:
case 255:
case 3832:
case 415:
case 3595:
case 1371:
case 35:
case 1542:
case 98:
case 829:
case 1644:
case 3339:
case 1058:
case 1354:
case 3317:
case 2390:
case 2796:
case 2773:
case 945:
case 3260:
case 599:
case 1713:
case 1238:
case 3712:
case 3847:
case 2514:
case 2080:
case 3786:
case 3059:
case 3380:
case 2649:
case 3766:
case 2060:
case 1574:
case 1254:
case 3452:
case 3239:
case 1936:
case 1453:
case 3673:
case 353:
case 839:
case 3696:
case 1748:
case 1606:
case 2565:
case 214:
case 3825:
case 511:
case 2852:
case 2612:
case 686:
case 688:
case 1152:
case 2830:
case 3985:
case 1528:
case 542:
case 3899:
case 1809:
case 1130:
case 3188:
case 692:
case 2164:
case 1735:
case 3667:
case 2109:
case 2846:
case 3392:
case 625:
case 1770:
case 4091:
case 2681:
case 2661:
case 1175:
case 420:
case 1815:
case 332:
case 1146:
case 2282:
case 2623:
case 3430:
case 558:
case 1345:
case 2875:
case 2262:
case 1978:
case 260:
case 1419:
case 1195:
case 3758:
case 1373:
case 2006:
case 1831:
case 1396:
case 505:
case 2754:
case 1790:
case 3372:
case 28:
case 3306:
case 860:
case 2969:
case 3908:
case 2532:
case 2895:
case 3950:
case 1143:
case 385:
case 11:
case 2313:
case 2989:
case 955:
case 1012:
case 1660:
case 1405:
case 3495:
case 2547:
case 3119:
case 1049:
case 3638:
case 893:
case 34:
case 1442:
case 3443:
case 1711:
case 3947:
case 3429:
case 589:
case 1061:
case 3602:
case 1081:
case 837:
case 3676:
case 3693:
case 2727:
case 100:
case 3645:
case 239:
case 2322:
case 3355:
case 3201:
case 3022:
case 2055:
case 3763:
case 1762:
case 4027:
case 2207:
case 3569:
case 2941:
case 786:
case 2829:
case 1594:
case 2270:
case 1387:
case 3721:
case 788:
case 3604:
case 1694:
case 644:
case 1715:
case 3669:
case 3040:
case 2107:
case 2775:
case 87:
case 3024:
case 594:
case 3328:
case 2170:
case 1401:
case 291:
case 3897:
case 2028:
case 482:
case 1784:
case 318:
case 2730:
case 3545:
case 2497:
case 3410:
case 1835:
case 1959:
case 1503:
case 3934:
case 3101:
case 152:
case 2074:
case 715:
case 577:
case 3219:
case 3374:
case 3725:
case 496:
case 2945:
case 973:
case 1848:
case 2357:
case 2976:
case 174:
case 2993:
case 3538:
case 2466:
case 1014:
case 3057:
case 678:
case 1318:
case 676:
case 767:
case 4052:
case 2051:
case 3205:
case 1420:
case 513:
case 850:
case 981:
case 1243:
case 12:
case 1065:
case 351:
case 615:
case 250:
case 1275:
case 410:
case 2523:
case 1862:
case 3427:
case 2561:
case 2182:
case 3821:
case 776:
case 667:
case 2729:
case 2162:
case 2581:
case 2215:
case 3567:
case 2421:
case 2398:
case 3098:
case 3912:
case 1230:
case 1628:
case 3288:
case 2483:
case 940:
case 3268:
case 2463:
case 4029:
case 4043:
case 2871:
case 2967:
case 2111:
case 3033:
case 2512:
case 224:
case 1651:
case 3779:
case 521:
case 1417:
case 2665:
case 1811:
case 2458:
case 363:
case 1572:
case 701:
case 1890:
case 2854:
case 199:
case 3800:
case 1922:
case 3858:
case 3923:
case 3877:
case 3471:
case 1047:
case 3117:
case 2614:
case 3981:
case 3834:
case 1520:
case 2838:
case 1859:
case 2426:
case 3785:
case 341:
case 1544:
case 1138:
case 1637:
case 2159:
case 840:
case 2053:
case 281:
case 217:
case 3643:
case 1605:
case 1460:
case 111:
case 2434:
case 403:
case 2233:
case 3438:
case 2566:
case 1241:
case 1480:
case 3445:
case 3510:
case 3368:
case 991:
case 1099:
case 2088:
case 2364:
case 3064:
case 3388:
case 3629:
case 142:
case 1204:
case 3476:
case 3402:
case 1492:
case 2298:
case 156:
case 1656:
case 2116:
case 158:
case 312:
case 3591:
case 1501:
case 488:
case 1375:
case 1724:
case 3103:
case 1816:
case 486:
case 51:
case 13:
case 2873:
case 2042:
case 2331:
case 2625:
case 3652:
case 123:
case 924:
case 1813:
case 1173:
case 2927:
case 1395:
case 3251:
case 2005:
case 2412:
case 1733:
case 1218:
case 2741:
case 1962:
case 3963:
case 3337:
case 3496:
case 1472:
case 1539:
case 1406:
case 3554:
case 3319:
case 2019:
case 3881:
case 3646:
case 834:
case 459:
case 2056:
case 219:
case 3861:
case 500:
case 3977:
case 1822:
case 2563:
case 1990:
case 189:
case 3900:
case 562:
case 380:
case 950:
case 3675:
case 1187:
case 1688:
case 1668:
case 1911:
case 4089:
case 1167:
case 240:
case 2240:
case 2867:
case 2739:
case 3419:
case 455:
case 427:
case 1105:
case 161:
case 215:
case 2096:
case 3396:
case 650:
case 3437:
case 1306:
case 3790:
case 2073:
case 1541:
case 2805:
case 2312:
case 1777:
case 1950:
case 1142:
case 3012:
case 3405:
case 2349:
case 3660:
case 876:
case 4039:
case 1495:
case 1119:
case 2659:
case 1638:
case 2179:
case 1244:
case 3711:
case 1443:
case 624:
case 2361:
case 1429:
case 2856:
case 128:
case 1676:
case 1602:
case 126:
case 3603:
case 1156:
case 791:
case 230:
case 3023:
case 801:
case 1355:
case 1201:
case 2323:
case 1763:
case 3129:
case 3762:
case 3782:
case 67:
case 2598:
case 3933:
case 3594:
case 1721:
case 724:
case 2557:
case 2277:
case 3338:
case 1059:
case 1786:
case 1380:
case 3034:
case 471:
case 2200:
case 1217:
case 3936:
case 2258:
case 153:
case 3748:
case 830:
case 3606:
case 2928:
case 331:
case 3271:
case 2326:
case 2613:
case 3940:
case 1153:
case 384:
case 954:
case 2701:
case 3864:
case 3809:
case 2868:
case 1475:
case 1188:
case 1687:
case 3227:
case 2415:
case 1667:
case 278:
case 3957:
case 1914:
case 867:
case 1392:
case 3393:
case 1303:
case 2002:
case 429:
case 3815:
case 920:
case 406:
case 3655:
case 2464:
case 3488:
case 2283:
case 2974:
case 1430:
case 2263:
case 3345:
case 2484:
case 3063:
case 2363:
case 3245:
case 2937:
case 1062:
case 1:
case 2919:
case 2383:
case 3083:
case 930:
case 368:
case 3494:
case 439:
case 1469:
case 2498:
case 2321:
case 3293:
case 4055:
case 3021:
case 1979:
case 366:
case 1292:
case 195:
case 2894:
case 1850:
case 1761:
case 2905:
case 1781:
case 3898:
case 170:
case 3189:
case 2942:
case 2150:
case 2607:
case 1723:
case 2108:
case 2755:
case 1832:
case 2226:
case 4006:
case 4072:
case 2071:
case 321:
case 15:
case 1543:
case 2531:
case 820:
case 1011:
case 773:
case 3141:
case 3644:
case 640:
case 3537:
case 1339:
case 3058:
case 1317:
case 3354:
case 2772:
case 2300:
case 2648:
case 3000:
case 575:
case 2234:
case 1260:
case 872:
case 1280:
case 590:
case 3238:
case 2377:
case 734:
case 2703:
case 394:
case 272:
case 3716:
case 1925:
case 2509:
case 3310:
case 2584:
case 2828:
case 2953:
case 1530:
case 673:
case 3428:
case 2091:
case 3836:
case 1575:
case 4092:
case 2424:
case 2662:
case 402:
case 136:
case 138:
case 460:
case 1546:
case 3617:
case 1344:
case 143:
case 2114:
case 1174:
case 3451:
case 1814:
case 377:
case 2386:
case 2165:
case 254:
case 3086:
case 2212:
case 414:
case 2457:
case 2185:
case 1734:
case 2760:
case 1999:
case 1272:
case 2611:
case 3909:
case 3553:
case 3273:
case 1865:
case 1885:
case 437:
case 1342:
case 33:
case 2043:
case 20:
case 2112:
case 585:
case 1652:
case 424:
case 2511:
case 323:
case 305:
case 882:
case 3196:
case 235:
case 1305:
case 1251:
case 3218:
case 2413:
case 1921:
case 2379:
case 2214:
case 783:
case 3406:
case 2590:
case 3517:
case 1554:
case 69:
case 3982:
case 2149:
case 2123:
case 1881:
case 1646:
case 3798:
case 1487:
case 210:
case 655:
case 1861:
case 2794:
case 1356:
case 1977:
case 1958:
case 2855:
case 389:
case 180:
case 1900:
case 959:
case 1675:
case 2161:
case 3455:
case 2422:
case 2664:
case 3187:
case 3688:
case 1228:
case 3668:
case 3167:
case 896:
case 1527:
case 706:
case 3329:
case 247:
case 1834:
case 3520:
case 2751:
case 992:
case 298:
case 2247:
case 755:
case 727:
case 3619:
case 1785:
case 141:
case 849:
case 1765:
case 3907:
case 1997:
case 3025:
case 2126:
case 2631:
case 311:
case 3605:
case 104:
case 1695:
case 1714:
case 608:
case 3757:
case 810:
case 2459:
case 2232:
case 1438:
case 2507:
case 1084:
case 1368:
case 671:
case 1009:
case 3099:
case 1388:
case 1064:
case 2416:
case 1629:
case 1986:
case 2570:
case 3204:
case 1476:
case 1966:
case 491:
case 986:
case 356:
case 3145:
case 2046:
case 2803:
case 864:
case 3346:
case 2892:
case 1591:
case 2075:
case 112:
case 3948:
case 683:
case 3375:
case 79:
case 1103:
case 2944:
case 3193:
case 3176:
case 3102:
case 803:
case 3555:
case 793:
case 1863:
case 522:
case 3862:
case 1821:
case 2163:
case 3369:
case 2640:
case 645:
case 3008:
case 2089:
case 1912:
case 2756:
case 1394:
case 3050:
case 570:
case 3389:
case 3628:
case 3230:
case 1288:
case 2462:
case 2906:
case 3032:
case 964:
case 1779:
case 3651:
case 2490:
case 1454:
case 2737:
case 1573:
case 163:
case 4005:
case 3506:
case 639:
case 3252:
case 3572:
case 2177:
case 714:
case 3731:
case 2411:
case 2817:
case 3890:
case 190:
case 2678:
case 3922:
case 2839:
case 3674:
case 175:
case 1471:
case 3154:
case 1117:
case 2657:
case 1139:
case 2158:
case 2705:
case 348:
case 2435:
case 3229:
case 4068:
case 1689:
case 4088:
case 3870:
case 1040:
case 1024:
case 3807:
case 1897:
case 739:
case 614:
case 2768:
case 116:
case 2801:
case 3835:
case 1576:
case 3592:
case 3959:
case 288:
case 2980:
case 286:
case 2960:
case 1934:
case 352:
case 78:
case 1219:
case 3916:
case 1374:
case 693:
case 1120:
case 2992:
case 2559:
case 998:
case 374:
case 1538:
case 1144:
case 473:
case 543:
case 2903:
case 1057:
case 947:
case 3318:
case 2018:
case 1866:
case 481:
case 745:
case 1641:
case 225:
case 1886:
case 2385:
case 203:
case 3065:
case 32:
case 151:
case 461:
case 1666:
case 3226:
case 2505:
case 3071:
case 1447:
case 2833:
case 221:
case 680:
case 524:
case 485:
case 1311:
case 1133:
case 3358:
case 2537:
case 2058:
case 3706:
case 2354:
case 2519:
case 1796:
case 3648:
case 44:
case 57:
case 2077:
case 2238:
case 1579:
case 1432:
case 1259:
case 3956:
case 1362:
case 2063:
case 3937:
case 428:
case 900:
case 1216:
case 3383:
case 1382:
case 409:
case 1450:
case 3635:
case 1408:
case 2293:
case 550:
case 3498:
case 3321:
case 813:
case 2021:
case 2276:
case 2202:
case 2327:
case 1995:
case 1869:
case 3670:
case 2898:
case 3027:
case 877:
case 2931:
case 2104:
case 3607:
case 1198:
case 2169:
case 3690:
case 1600:
case 1465:
case 2878:
case 879:
case 2118:
case 4059:
case 3874:
case 1485:
case 3114:
case 2639:
case 2915:
case 1818:
case 2451:
case 2857:
case 453:
case 1213:
case 1738:
case 354:
case 3165:
case 3212:
case 3457:
case 2066:
case 3185:
case 3366:
case 866:
case 3760:
case 2909:
case 2984:
case 2553:
case 2964:
case 612:
case 3988:
case 2474:
case 1930:
case 183:
case 2287:
case 294:
case 1370:
case 2840:
case 1124:
case 1307:
case 2568:
case 641:
case 1683:
case 1001:
case 2836:
case 1222:
case 320:
case 3424:
case 106:
case 1621:
case 1335:
case 1235:
case 966:
case 4062:
case 262:
case 968:
case 2603:
case 139:
case 519:
case 1322:
case 2023:
case 2291:
case 3616:
case 3323:
case 1055:
case 2762:
case 2129:
case 2782:
case 2210:
case 1207:
case 1508:
case 2367:
case 2933:
case 470:
case 3598:
case 1550:
case 3739:
case 2419:
case 921:
case 2373:
case 1006:
case 1072:
case 2437:
case 1754:
case 3073:
case 2790:
case 2998:
case 3805:
case 1895:
case 1131:
case 3994:
case 21:
case 3286:
case 1989:
case 3349:
case 2405:
case 1634:
case 1771:
case 2680:
case 3179:
case 751:
case 3819:
case 3837:
case 2442:
case 1248:
case 3888:
case 3524:
case 193:
case 3701:
case 2528:
case 1164:
case 3540:
case 3415:
case 2735:
case 1184:
case 378:
case 2376:
case 1846:
case 2957:
case 1003:
case 1092:
case 3221:
case 1681:
case 102:
case 1918:
case 2815:
case 3622:
case 2146:
case 3283:
case 2488:
case 1316:
case 3974:
case 438:
case 1499:
case 3263:
case 2468:
case 1875:
case 3536:
case 3045:
case 369:
case 1262:
case 160:
case 3557:
case 3277:
case 1514:
case 1080:
case 1359:
case 2338:
case 977:
case 573:
case 1649:
case 3334:
case 1060:
case 763:
case 3200:
case 2574:
case 1290:
case 1425:
case 2453:
case 616:
case 1585:
case 1211:
case 2606:
case 2672:
case 3928:
case 301:
case 3853:
case 790:
case 1852:
case 1612:
case 2026:
case 2551:
case 3720:
case 913:
case 517:
case 2152:
case 1871:
case 2032:
case 1333:
case 4031:
case 3332:
case 3041:
case 1477:
case 1512:
case 2651:
case 124:
case 1987:
case 3513:
case 2417:
case 3737:
case 2811:
case 1458:
case 93:
case 2506:
case 3411:
case 2890:
case 3742:
case 299:
case 753:
case 2922:
case 3839:
case 2674:
case 1549:
case 3100:
case 2047:
case 707:
case 1190:
case 2154:
case 897:
case 3657:
case 846:
case 989:
case 2882:
case 359:
case 3522:
case 2555:
case 661:
case 1523:
case 2246:
case 3183:
case 480:
case 1729:
case 2369:
case 874:
case 1421:
case 2008:
case 2304:
case 3350:
case 2050:
case 3004:
case 2389:
case 64:
case 1264:
case 1284:
case 3462:
case 1996:
case 3906:
case 3753:
case 1074:
case 3844:
case 1945:
case 761:
case 785:
case 274:
case 1993:
case 441:
case 2014:
case 2580:
case 2318:
case 2560:
case 1486:
case 1148:
case 3018:
case 3820:
case 583:
case 2295:
case 632:
case 1051:
case 1526:
case 911:
case 357:
case 46:
case 3633:
case 987:
case 74:
case 404:
case 233:
case 2444:
case 2085:
case 1231:
case 3365:
case 2243:
case 4084:
case 726:
case 1650:
case 2694:
case 2229:
case 3435:
case 297:
case 1608:
case 3698:
case 246:
case 2110:
case 942:
case 4064:
case 728:
case 1775:
case 709:
case 1170:
case 2807:
case 1028:
case 1810:
case 508:
case 2709:
case 4015:
case 3516:
case 653:
case 2764:
case 1891:
case 3801:
case 2592:
case 958:
case 529:
case 388:
case 2503:
case 3960:
case 386:
case 252:
case 2191:
case 2798:
case 1122:
case 1769:
case 1789:
case 310:
case 3615:
case 1056:
case 3794:
case 3181:
case 3562:
case 3855:
case 1236:
case 2822:
case 2990:
case 3917:
case 1954:
case 289:
case 65:
case 3582:
case 3161:
case 2455:
case 1423:
case 1699:
case 3609:
case 2911:
case 2167:
case 349:
case 140:
case 738:
case 1887:
case 1240:
case 2329:
case 736:
case 743:
case 1113:
case 23:
case 1873:
case 3112:
case 1331:
case 1625:
case 6:
case 2653:
case 205:
case 2813:
case 2173:
case 1449:
case 858:
case 364:
case 3095:
case 1412:
case 2733:
case 2218:
case 3379:
case 3214:
case 1278:
case 1558:
case 475:
case 2472:
case 2539:
case 3590:
case 670:
case 999:
case 2982:
case 3507:
case 643:
case 3399:
case 1309:
case 1068:
case 2099:
case 3030:
case 1364:
case 2736:
case 4040:
case 7:
case 3416:
case 997:
case 2289:
case 946:
case 3570:
case 2204:
case 2492:
case 1298:
case 2269:
case 805:
case 1315:
case 2145:
case 1116:
case 3803:
case 3046:
case 2346:
case 1802:
case 1876:
case 795:
case 3892:
case 4036:
case 2740:
case 83:
case 2948:
case 2724:
case 1845:
case 2193:
case 2816:
case 770:
case 823:
case 3751:
case 1679:
case 4078:
case 974:
case 3247:
case 2859:
case 3901:
case 173:
case 75:
case 1159:
case 2907:
case 1053:
case 181:
case 92:
case 2025:
case 117:
case 889:
case 2778:
case 933:
case 2642:
case 3631:
case 2605:
case 638:
case 211:
case 1586:
case 287:
case 1434:
case 2757:
case 3459:
case 1718:
case 2241:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760738401/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,0,1,1,0,0,1,1,1,0,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,1,1,0,1,1,0,1,1,0,0,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,0,1,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,0,0,1,1,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,1,0,1,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,1,0,0,0,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,1,1,1,1,1,0,0,1,1,1,0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,0,0,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,0,0,1,1,1,1,1,1,0,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,1,1,1,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,0,1,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,0,];
var gg_b = "1760742001/";

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
