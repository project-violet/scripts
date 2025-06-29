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
case 3585:
case 1270:
case 1309:
case 1047:
case 3043:
case 1613:
case 2499:
case 2423:
case 2400:
case 3226:
case 913:
case 898:
case 880:
case 1765:
case 2193:
case 3956:
case 2921:
case 3341:
case 151:
case 4080:
case 2469:
case 3080:
case 343:
case 1321:
case 3706:
case 3389:
case 216:
case 3492:
case 1069:
case 1571:
case 814:
case 2960:
case 404:
case 2288:
case 98:
case 1454:
case 1818:
case 3752:
case 1773:
case 3517:
case 2447:
case 2236:
case 1099:
case 2055:
case 2990:
case 1246:
case 785:
case 1711:
case 3696:
case 3462:
case 1219:
case 4027:
case 1280:
case 3575:
case 3488:
case 2117:
case 1558:
case 1707:
case 3325:
case 359:
case 3703:
case 422:
case 692:
case 2522:
case 3501:
case 1667:
case 3693:
case 684:
case 1697:
case 2008:
case 937:
case 2825:
case 901:
case 1549:
case 356:
case 702:
case 1344:
case 3872:
case 929:
case 1853:
case 1998:
case 2233:
case 952:
case 751:
case 3436:
case 2334:
case 3310:
case 3868:
case 370:
case 3593:
case 2944:
case 4019:
case 2639:
case 2426:
case 3791:
case 3379:
case 3200:
case 3223:
case 1227:
case 1649:
case 366:
case 3019:
case 1408:
case 1934:
case 3787:
case 3529:
case 962:
case 761:
case 4046:
case 223:
case 1740:
case 185:
case 2730:
case 124:
case 1412:
case 2335:
case 3714:
case 2196:
case 369:
case 3563:
case 1957:
case 2368:
case 3953:
case 3601:
case 1567:
case 3374:
case 2030:
case 3014:
case 1040:
case 3610:
case 1277:
case 4014:
case 2949:
case 3273:
case 2634:
case 3329:
case 1252:
case 1397:
case 570:
case 2916:
case 3393:
case 3061:
case 3294:
case 720:
case 2407:
case 1367:
case 4091:
case 810:
case 2893:
case 1545:
case 3332:
case 2829:
case 1083:
case 1922:
case 339:
case 2708:
case 971:
case 772:
case 559:
case 439:
case 3839:
case 1726:
case 2668:
case 522:
case 3942:
case 3015:
case 91:
case 825:
case 3770:
case 1118:
case 2635:
case 327:
case 4015:
case 884:
case 2572:
case 1358:
case 697:
case 3286:
case 108:
case 1430:
case 892:
case 2712:
case 2997:
case 1076:
case 1544:
case 707:
case 1156:
case 3510:
case 2534:
case 2875:
case 731:
case 932:
case 1102:
case 2339:
case 436:
case 3624:
case 2698:
case 4003:
case 1007:
case 556:
case 3020:
case 957:
case 504:
case 2486:
case 1371:
case 3134:
case 2110:
case 291:
case 1459:
case 1521:
case 22:
case 1064:
case 1291:
case 1700:
case 968:
case 3727:
case 1094:
case 2125:
case 614:
case 1690:
case 3006:
case 3240:
case 1313:
case 474:
case 1609:
case 1073:
case 3317:
case 3052:
case 374:
case 2884:
case 4052:
case 2904:
case 2438:
case 1214:
case 3428:
case 3207:
case 1203:
case 1220:
case 3396:
case 2866:
case 1304:
case 3168:
case 1065:
case 1590:
case 2048:
case 428:
case 3780:
case 3385:
case 328:
case 1038:
case 2582:
case 3135:
case 698:
case 3276:
case 1747:
case 1215:
case 708:
case 1621:
case 3198:
case 2059:
case 1095:
case 3366:
case 3689:
case 958:
case 2979:
case 1310:
case 2051:
case 1070:
case 1629:
case 1715:
case 3998:
case 743:
case 1674:
case 3516:
case 1150:
case 2171:
case 2446:
case 3344:
case 964:
case 156:
case 2419:
case 4026:
case 195:
case 3697:
case 3026:
case 1693:
case 1501:
case 122:
case 633:
case 3776:
case 1834:
case 2113:
case 1953:
case 1601:
case 3972:
case 1761:
case 1714:
case 694:
case 3412:
case 324:
case 3345:
case 1532:
case 2845:
case 863:
case 1529:
case 3581:
case 3616:
case 682:
case 2255:
case 166:
case 3934:
case 1019:
case 1379:
case 1324:
case 27:
case 2989:
case 1080:
case 244:
case 65:
case 3671:
case 1882:
case 906:
case 402:
case 1956:
case 846:
case 756:
case 3765:
case 812:
case 3795:
case 3504:
case 83:
case 3390:
case 617:
case 99:
case 722:
case 1918:
case 3786:
case 377:
case 909:
case 1043:
case 1478:
case 3270:
case 3831:
case 3047:
case 3982:
case 4023:
case 3802:
case 1027:
case 3000:
case 1696:
case 3023:
case 888:
case 2158:
case 3711:
case 2318:
case 930:
case 3856:
case 1752:
case 3818:
case 1777:
case 4069:
case 203:
case 3454:
case 3571:
case 66:
case 2116:
case 104:
case 1931:
case 1492:
case 3505:
case 1389:
case 3794:
case 2149:
case 770:
case 1706:
case 3321:
case 766:
case 2941:
case 520:
case 1139:
case 2302:
case 3214:
case 4073:
case 1850:
case 2871:
case 174:
case 1172:
case 3769:
case 3153:
case 1052:
case 950:
case 3448:
case 2996:
case 3690:
case 4094:
case 86:
case 2805:
case 700:
case 2985:
case 3305:
case 1727:
case 420:
case 3291:
case 3064:
case 3660:
case 4064:
case 320:
case 3459:
case 2631:
case 4011:
case 1134:
case 2813:
case 3287:
case 3371:
case 3799:
case 1689:
case 3560:
case 2984:
case 2602:
case 502:
case 945:
case 431:
case 2531:
case 3747:
case 3215:
case 805:
case 1541:
case 2733:
case 817:
case 3086:
case 551:
case 63:
case 281:
case 976:
case 577:
case 128:
case 960:
case 3509:
case 646:
case 4038:
case 2618:
case 1780:
case 3065:
case 1168:
case 739:
case 3304:
case 2406:
case 3203:
case 3220:
case 1428:
case 1746:
case 4083:
case 1182:
case 2881:
case 2415:
case 299:
case 1332:
case 774:
case 1087:
case 3367:
case 2897:
case 882:
case 2190:
case 1625:
case 1091:
case 2975:
case 934:
case 1061:
case 1294:
case 1524:
case 3397:
case 2867:
case 1329:
case 255:
case 2788:
case 3277:
case 1014:
case 3939:
case 1374:
case 3842:
case 3381:
case 1679:
case 136:
case 2974:
case 4076:
case 2248:
case 265:
case 3430:
case 3544:
case 3076:
case 2858:
case 993:
case 3316:
case 308:
case 9:
case 2553:
case 2963:
case 2487:
case 1375:
case 1015:
case 1770:
case 3645:
case 240:
case 1942:
case 1295:
case 1839:
case 3726:
case 1525:
case 139:
case 3128:
case 1988:
case 176:
case 3749:
case 928:
case 603:
case 160:
case 7:
case 3468:
case 2826:
case 1687:
case 1515:
case 3716:
case 3435:
case 3241:
case 2053:
case 2111:
case 1812:
case 358:
case 0:
case 1614:
case 458:
case 1775:
case 4044:
case 1370:
case 793:
case 2946:
case 2424:
case 3326:
case 1661:
case 3507:
case 1503:
case 1520:
case 179:
case 2164:
case 368:
case 1346:
case 2186:
case 3676:
case 217:
case 2742:
case 1514:
case 3540:
case 468:
case 3908:
case 3434:
case 3888:
case 734:
case 1159:
case 2195:
case 58:
case 1561:
case 3607:
case 2970:
case 1620:
case 1951:
case 1603:
case 3289:
case 1793:
case 1221:
case 25:
case 3912:
case 3797:
case 3045:
case 1587:
case 1148:
case 3583:
case 1774:
case 3781:
case 1766:
case 1978:
case 4090:
case 927:
case 282:
case 31:
case 3090:
case 1677:
case 1343:
case 471:
case 899:
case 3347:
case 1418:
case 2333:
case 3538:
case 4009:
case 939:
case 1244:
case 3833:
case 357:
case 936:
case 1041:
case 2272:
case 537:
case 1130:
case 457:
case 896:
case 2031:
case 1402:
case 779:
case 3664:
case 3862:
case 4060:
case 367:
case 2176:
case 2441:
case 3686:
case 3511:
case 134:
case 218:
case 865:
case 2056:
case 562:
case 2002:
case 3695:
case 4021:
case 2980:
case 2107:
case 750:
case 3594:
case 3323:
case 3937:
case 840:
case 1506:
case 1577:
case 3573:
case 900:
case 1552:
case 3638:
case 1784:
case 362:
case 1267:
case 3828:
case 2894:
case 462:
case 154:
case 640:
case 567:
case 2873:
case 253:
case 3151:
case 970:
case 1352:
case 3647:
case 3373:
case 3013:
case 583:
case 1643:
case 2811:
case 3599:
case 969:
case 4013:
case 2328:
case 3500:
case 3948:
case 1527:
case 1789:
case 665:
case 2496:
case 3394:
case 1085:
case 922:
case 2678:
case 3547:
case 1928:
case 1543:
case 959:
case 2886:
case 2906:
case 2533:
case 1216:
case 287:
case 2977:
case 2562:
case 696:
case 3600:
case 326:
case 1249:
case 655:
case 2239:
case 51:
case 426:
case 709:
case 3760:
case 3395:
case 2865:
case 532:
case 2222:
case 3790:
case 429:
case 2592:
case 329:
case 3386:
case 301:
case 1258:
case 337:
case 3450:
case 811:
case 60:
case 995:
case 2838:
case 1580:
case 401:
case 263:
case 681:
case 212:
case 3626:
case 3192:
case 568:
case 844:
case 754:
case 3745:
case 1670:
case 1213:
case 4081:
case 3340:
case 2903:
case 2840:
case 2475:
case 2147:
case 1271:
case 3284:
case 1205:
case 249:
case 1779:
case 1391:
case 1063:
case 1724:
case 2401:
case 130:
case 3422:
case 2432:
case 1075:
case 2688:
case 3178:
case 290:
case 19:
case 1442:
case 2199:
case 2463:
case 3526:
case 4049:
case 1204:
case 3307:
case 673:
case 1619:
case 3376:
case 2474:
case 2753:
case 3285:
case 1570:
case 764:
case 2961:
case 4016:
case 2429:
case 2636:
case 2161:
case 1862:
case 1225:
case 1664:
case 1060:
case 1704:
case 132:
case 3402:
case 3380:
case 758:
case 2843:
case 2354:
case 1611:
case 848:
case 3130:
case 1586:
case 2253:
case 2114:
case 564:
case 2082:
case 3244:
case 2337:
case 3652:
case 2880:
case 1347:
case 1673:
case 3677:
case 1210:
case 2923:
case 2900:
case 1565:
case 1955:
case 4:
case 2999:
case 2191:
case 1892:
case 3:
case 3978:
case 284:
case 1771:
case 2750:
case 1638:
case 1482:
case 3552:
case 225:
case 2648:
case 3577:
case 3933:
case 3506:
case 1224:
case 1937:
case 1300:
case 1594:
case 3327:
case 2827:
case 2120:
case 1695:
case 4089:
case 1713:
case 434:
case 3431:
case 3245:
case 768:
case 334:
case 3855:
case 554:
case 379:
case 907:
case 3520:
case 931:
case 479:
case 3290:
case 3701:
case 1498:
case 2722:
case 915:
case 891:
case 2034:
case 345:
case 3010:
case 757:
case 1640:
case 3812:
case 2630:
case 1758:
case 4010:
case 642:
case 2072:
case 1716:
case 2312:
case 59:
case 2870:
case 2445:
case 1683:
case 2231:
case 3515:
case 771:
case 1851:
case 972:
case 2152:
case 3260:
case 4025:
case 476:
case 360:
case 1468:
case 2106:
case 71:
case 3774:
case 1781:
case 2035:
case 2846:
case 2256:
case 3148:
case 1045:
case 1836:
case 3729:
case 3615:
case 3587:
case 530:
case 3221:
case 450:
case 2819:
case 3951:
case 3620:
case 3079:
case 3319:
case 1767:
case 2098:
case 3024:
case 3732:
case 920:
case 2218:
case 1540:
case 1434:
case 1676:
case 3346:
case 2444:
case 2926:
case 2530:
case 1422:
case 2798:
case 1067:
case 3063:
case 3391:
case 1162:
case 3779:
case 3205:
case 4063:
case 2458:
case 4032:
case 3271:
case 1284:
case 2612:
case 3830:
case 2814:
case 3387:
case 3213:
case 4074:
case 3029:
case 2907:
case 1745:
case 1081:
case 2330:
case 3074:
case 3546:
case 2416:
case 2735:
case 961:
case 3361:
case 1192:
case 4093:
case 2449:
case 2608:
case 2768:
case 280:
case 18:
case 298:
case 1439:
case 3093:
case 1626:
case 737:
case 3570:
case 1285:
case 138:
case 3646:
case 214:
case 1016:
case 2757:
case 2481:
case 3725:
case 306:
case 2940:
case 406:
case 842:
case 1930:
case 1526:
case 3001:
case 409:
case 2467:
case 647:
case 2820:
case 1266:
case 62:
case 1744:
case 2512:
case 3155:
case 39:
case 4075:
case 321:
case 1178:
case 3315:
case 3075:
case 49:
case 3297:
case 1293:
case 3281:
case 1274:
case 4017:
case 1599:
case 3377:
case 3643:
case 4084:
case 2877:
case 3680:
case 241:
case 2242:
case 3084:
case 1364:
case 78:
case 162:
case 297:
case 738:
case 3580:
case 1136:
case 1450:
case 137:
case 2782:
case 1386:
case 1669:
case 2146:
case 101:
case 129:
case 2405:
case 1790:
case 1201:
case 2911:
case 2359:
case 1004:
case 648:
case 1365:
case 978:
case 2973:
case 3096:
case 5:
case 3741:
case 3216:
case 2655:
case 4085:
case 1188:
case 2348:
case 3085:
case 2994:
case 475:
case 1814:
case 3250:
case 2133:
case 3042:
case 919:
case 1612:
case 2284:
case 3588:
case 2383:
case 375:
case 3475:
case 55:
case 449:
case 607:
case 2067:
case 349:
case 1449:
case 797:
case 2192:
case 446:
case 1976:
case 802:
case 180:
case 1907:
case 2217:
case 505:
case 3536:
case 741:
case 3903:
case 851:
case 672:
case 1735:
case 1416:
case 1940:
case 2049:
case 2930:
case 1497:
case 2285:
case 3961:
case 861:
case 2016:
case 390:
case 2058:
case 3432:
case 3688:
case 490:
case 488:
case 1734:
case 1467:
case 1022:
case 3463:
case 3987:
case 1803:
case 1820:
case 2266:
case 1983:
case 3123:
case 1637:
case 3633:
case 2647:
case 2373:
case 3756:
case 1938:
case 1404:
case 2721:
case 2293:
case 608:
case 923:
case 3328:
case 3662:
case 2394:
case 3864:
case 798:
case 3466:
case 780:
case 197:
case 1806:
case 353:
case 1852:
case 2151:
case 1877:
case 2232:
case 2311:
case 1050:
case 3592:
case 1405:
case 2395:
case 594:
case 2790:
case 2136:
case 1964:
case 2275:
case 363:
case 2709:
case 1554:
case 3484:
case 2669:
case 1146:
case 1782:
case 1655:
case 1537:
case 2699:
case 3906:
case 2338:
case 2547:
case 1413:
case 3678:
case 1994:
case 2188:
case 3417:
case 487:
case 885:
case 1348:
case 3895:
case 2365:
case 2004:
case 2760:
case 3562:
case 1354:
case 3140:
case 3847:
case 3257:
case 1114:
case 257:
case 2833:
case 1253:
case 2611:
case 3489:
case 2664:
case 685:
case 494:
case 2862:
case 624:
case 2704:
case 382:
case 2565:
case 21:
case 482:
case 2892:
case 3362:
case 2538:
case 587:
case 1082:
case 1337:
case 2210:
case 3183:
case 1923:
case 1548:
case 1900:
case 2673:
case 1187:
case 3927:
case 2224:
case 2705:
case 3943:
case 3528:
case 2638:
case 1750:
case 4018:
case 2482:
case 1355:
case 2771:
case 3869:
case 2399:
case 1409:
case 125:
case 283:
case 1115:
case 3378:
case 2878:
case 3176:
case 3441:
case 3235:
case 2686:
case 3899:
case 2369:
case 192:
case 1120:
case 3800:
case 3823:
case 3107:
case 2021:
case 3002:
case 2695:
case 678:
case 1034:
case 2758:
case 1630:
case 258:
case 3282:
case 3479:
case 2507:
case 1308:
case 3424:
case 2326:
case 36:
case 2468:
case 46:
case 3194:
case 1057:
case 2435:
case 2716:
case 2241:
case 1072:
case 3053:
case 1152:
case 1177:
case 1445:
case 3165:
case 651:
case 872:
case 1202:
case 53:
case 2797:
case 2912:
case 2289:
case 602:
case 2472:
case 725:
case 2457:
case 3138:
case 2045:
case 784:
case 2540:
case 417:
case 991:
case 268:
case 1444:
case 3186:
case 317:
case 831:
case 3970:
case 3195:
case 512:
case 3995:
case 3050:
case 254:
case 3654:
case 1873:
case 153:
case 4050:
case 1718:
case 2680:
case 3852:
case 3986:
case 1126:
case 2267:
case 397:
case 746:
case 3806:
case 856:
case 1864:
case 859:
case 1496:
case 1328:
case 822:
case 3404:
case 2643:
case 636:
case 525:
case 2017:
case 1633:
case 3965:
case 2112:
case 1811:
case 2249:
case 2627:
case 2096:
case 1562:
case 1977:
case 1239:
case 510:
case 2859:
case 1417:
case 2928:
case 788:
case 1678:
case 1533:
case 2216:
case 3655:
case 1886:
case 600:
case 264:
case 3471:
case 3146:
case 2848:
case 3964:
case 3911:
case 1865:
case 3359:
case 3330:
case 2074:
case 3416:
case 1920:
case 2213:
case 1536:
case 3180:
case 2154:
case 1883:
case 3907:
case 903:
case 3976:
case 2093:
case 3891:
case 2519:
case 3449:
case 498:
case 3608:
case 2205:
case 230:
case 13:
case 1840:
case 1147:
case 3143:
case 2137:
case 1042:
case 2830:
case 3612:
case 1250:
case 3814:
case 209:
case 1100:
case 4022:
case 3127:
case 3820:
case 2001:
case 1463:
case 3022:
case 787:
case 1991:
case 1432:
case 1688:
case 2710:
case 2155:
case 190:
case 29:
case 1876:
case 2646:
case 1169:
case 314:
case 804:
case 763:
case 3815:
case 1636:
case 1429:
case 2570:
case 3039:
case 2204:
case 2725:
case 206:
case 4039:
case 944:
case 2303:
case 3940:
case 3870:
case 3152:
case 3072:
case 276:
case 1194:
case 2808:
case 981:
case 2988:
case 3739:
case 16:
case 3106:
case 1946:
case 1424:
case 2701:
case 3308:
case 1164:
case 1479:
case 2661:
case 2614:
case 1282:
case 3034:
case 2209:
case 1351:
case 2010:
case 580:
case 2159:
case 1195:
case 2951:
case 2079:
case 2603:
case 1970:
case 2514:
case 117:
case 1742:
case 3444:
case 3530:
case 1410:
case 3256:
case 2148:
case 2774:
case 828:
case 3035:
case 3846:
case 4068:
case 1425:
case 643:
case 3068:
case 2793:
case 2221:
case 250:
case 15:
case 1234:
case 3187:
case 4082:
case 2854:
case 2677:
case 1183:
case 666:
case 2343:
case 3082:
case 670:
case 410:
case 1628:
case 2:
case 2978:
case 2606:
case 182:
case 3559:
case 3969:
case 2402:
case 1489:
case 2796:
case 293:
case 2130:
case 1257:
case 3114:
case 1140:
case 1847:
case 2380:
case 1031:
case 669:
case 2785:
case 955:
case 1268:
case 597:
case 3460:
case 2089:
case 1107:
case 836:
case 234:
case 1899:
case 118:
case 392:
case 2855:
case 1235:
case 1441:
case 705:
case 622:
case 1056:
case 717:
case 492:
case 2992:
case 2245:
case 2717:
case 659:
case 695:
case 484:
case 2552:
case 90:
case 3409:
case 1018:
case 3648:
case 2962:
case 3355:
case 384:
case 1869:
case 827:
case 425:
case 3947:
case 2327:
case 2506:
case 3490:
case 3465:
case 70:
case 1985:
case 876:
case 1871:
case 2157:
case 3438:
case 799:
case 2240:
case 1518:
case 606:
case 1996:
case 173:
case 2317:
case 2052:
case 1966:
case 1778:
case 845:
case 1631:
case 2283:
case 1556:
case 3755:
case 3486:
case 347:
case 2641:
case 879:
case 2727:
case 542:
case 32:
case 621:
case 1502:
case 3905:
case 1656:
case 2743:
case 765:
case 3737:
case 3896:
case 2366:
case 2689:
case 4059:
case 3124:
case 3971:
case 1406:
case 2168:
case 850:
case 2428:
case 2207:
case 3866:
case 3913:
case 740:
case 3494:
case 2135:
case 2276:
case 1452:
case 2780:
case 3473:
case 1618:
case 1477:
case 2385:
case 1190:
case 664:
case 2363:
case 3893:
case 2264:
case 2625:
case 2719:
case 1881:
case 2182:
case 3657:
case 3874:
case 2746:
case 1653:
case 2211:
case 1901:
case 2332:
case 2087:
case 1109:
case 199:
case 4030:
case 1788:
case 3949:
case 196:
case 448:
case 3476:
case 3141:
case 2374:
case 3030:
case 2294:
case 3407:
case 2579:
case 1160:
case 3916:
case 3598:
case 2510:
case 1248:
case 165:
case 3534:
case 3440:
case 1414:
case 1993:
case 2238:
case 834:
case 236:
case 1929:
case 2003:
case 2020:
case 1461:
case 3339:
case 489:
case 1974:
case 2265:
case 3981:
case 1121:
case 2822:
case 2839:
case 2301:
case 24:
case 140:
case 1259:
case 1491:
case 2525:
case 3635:
case 3557:
case 3967:
case 3572:
case 1553:
case 3483:
case 1751:
case 982:
case 1419:
case 3262:
case 589:
case 295:
case 1105:
case 256:
case 2693:
case 4008:
case 963:
case 2436:
case 2629:
case 1979:
case 744:
case 854:
case 1237:
case 1446:
case 3184:
case 2674:
case 3233:
case 1353:
case 3372:
case 3012:
case 1642:
case 2575:
case 2834:
case 1254:
case 2632:
case 3810:
case 4012:
case 3117:
case 2501:
case 2325:
case 3292:
case 2720:
case 2703:
case 423:
case 323:
case 693:
case 3185:
case 2532:
case 3622:
case 3368:
case 3824:
case 2953:
case 2601:
case 3879:
case 269:
case 2791:
case 2200:
case 1910:
case 2223:
case 266:
case 3166:
case 17:
case 270:
case 2868:
case 2593:
case 3639:
case 2324:
case 2787:
case 2451:
case 2529:
case 1845:
case 1036:
case 1470:
case 1255:
case 2046:
case 548:
case 1092:
case 1197:
case 1890:
case 3193:
case 2080:
case 1331:
case 1809:
case 3748:
case 3129:
case 3054:
case 243:
case 1181:
case 2882:
case 3650:
case 3174:
case 144:
case 3469:
case 2902:
case 4054:
case 3037:
case 3382:
case 2585:
case 3132:
case 3251:
case 2596:
case 1062:
case 2918:
case 3423:
case 821:
case 3055:
case 3990:
case 949:
case 93:
case 679:
case 2685:
case 1443:
case 3175:
case 3447:
case 3236:
case 1318:
case 3101:
case 1821:
case 975:
case 319:
case 2462:
case 809:
case 2389:
case 442:
case 2492:
case 2931:
case 806:
case 2139:
case 342:
case 3288:
case 103:
case 1356:
case 676:
case 711:
case 204:
case 1116:
case 946:
case 735:
case 547:
case 3960:
case 1916:
case 832:
case 57:
case 3867:
case 2397:
case 1228:
case 3420:
case 72:
case 3403:
case 791:
case 148:
case 2939:
case 496:
case 2842:
case 1476:
case 455:
case 396:
case 747:
case 626:
case 355:
case 2040:
case 2083:
case 3415:
case 629:
case 3109:
case 499:
case 3653:
case 3881:
case 3342:
case 871:
case 984:
case 1568:
case 1893:
case 637:
case 3190:
case 3487:
case 2118:
case 3751:
case 2645:
case 910:
case 1572:
case 1967:
case 1635:
case 3816:
case 3963:
case 3491:
case 440:
case 1708:
case 3849:
case 3259:
case 340:
case 1698:
case 1981:
case 2102:
case 1339:
case 3461:
case 189:
case 2349:
case 2007:
case 2430:
case 3858:
case 2076:
case 465:
case 1875:
case 1440:
case 2156:
case 365:
case 2660:
case 2305:
case 2723:
case 2700:
case 2291:
case 2011:
case 147:
case 1350:
case 1486:
case 858:
case 2371:
case 2799:
case 3556:
case 1817:
case 3813:
case 503:
case 3778:
case 2448:
case 3518:
case 373:
case 1904:
case 1438:
case 2214:
case 3871:
case 3805:
case 3985:
case 1125:
case 4028:
case 638:
case 1465:
case 2509:
case 1754:
case 3452:
case 1473:
case 1582:
case 2203:
case 1494:
case 2220:
case 3917:
case 3406:
case 2560:
case 3984:
case 2095:
case 3762:
case 1179:
case 231:
case 207:
case 1737:
case 1885:
case 215:
case 3531:
case 2747:
case 2215:
case 1400:
case 2795:
case 1163:
case 1759:
case 3860:
case 2390:
case 4062:
case 2613:
case 1132:
case 2455:
case 2786:
case 1499:
case 3033:
case 277:
case 2142:
case 1037:
case 1382:
case 344:
case 2671:
case 1650:
case 3181:
case 1129:
case 444:
case 1748:
case 2765:
case 3197:
case 3890:
case 2360:
case 2571:
case 261:
case 2818:
case 980:
case 3356:
case 2321:
case 3941:
case 3302:
case 3728:
case 2505:
case 3149:
case 2794:
case 2219:
case 119:
case 2023:
case 1889:
case 658:
case 3821:
case 2802:
case 2513:
case 1175:
case 573:
case 3078:
case 3443:
case 3158:
case 2437:
case 2246:
case 1055:
case 1292:
case 2935:
case 1522:
case 2776:
case 3353:
case 1372:
case 3844:
case 4051:
case 2516:
case 3237:
case 3446:
case 3924:
case 1184:
case 3979:
case 3051:
case 565:
case 1334:
case 2026:
case 2549:
case 1262:
case 1008:
case 683:
case 801:
case 1278:
case 555:
case 671:
case 1639:
case 716:
case 1398:
case 829:
case 1166:
case 941:
case 657:
case 2972:
case 719:
case 3104:
case 3925:
case 123:
case 3088:
case 2740:
case 632:
case 1730:
case 2658:
case 2412:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1751216402/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,1,0,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,0,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,0,0,0,0,1,0,1,1,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,0,0,1,0,1,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,1,1,0,0,0,1,1,1,1,0,1,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,1,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,1,0,0,0,1,0,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,0,1,0,1,1,0,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,0,1,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,1,0,1,0,0,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,0,1,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,0,0,0,0,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,1,1,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,1,1,1,1,1,1,1,0,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,1,1,0,0,0,1,1,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,1,1,1,1,0,0,0,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,1,0,0,0,0,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,0,0,0,0,0,1,0,0,0,0,1,1,1,0,1,0,0,0,0,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,0,0,0,1,0,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,1,0,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,1,1,1,1,0,0,0,1,1,1,0,1,1,0,];
var gg_b = "1751216402/";

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
