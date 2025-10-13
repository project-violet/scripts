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
case 3742:
case 3864:
case 2416:
case 3235:
case 1953:
case 632:
case 2125:
case 2362:
case 3182:
case 2556:
case 526:
case 1228:
case 371:
case 2043:
case 6:
case 2247:
case 729:
case 406:
case 1090:
case 612:
case 1545:
case 394:
case 3061:
case 56:
case 1564:
case 2620:
case 2613:
case 3449:
case 2421:
case 2406:
case 3058:
case 3992:
case 2693:
case 1364:
case 183:
case 1441:
case 2750:
case 2371:
case 124:
case 926:
case 3654:
case 3582:
case 2156:
case 1345:
case 367:
case 1036:
case 1000:
case 1145:
case 1882:
case 2171:
case 379:
case 1935:
case 1785:
case 3253:
case 3270:
case 2838:
case 788:
case 647:
case 940:
case 3563:
case 99:
case 1575:
case 2277:
case 3438:
case 1321:
case 2073:
case 1330:
case 2541:
case 1635:
case 2252:
case 1723:
case 1425:
case 1940:
case 3692:
case 1700:
case 1462:
case 2993:
case 1736:
case 4055:
case 515:
case 309:
case 1085:
case 941:
case 3757:
case 1121:
case 1863:
case 2583:
case 823:
case 949:
case 3821:
case 3806:
case 1254:
case 3830:
case 3627:
case 3484:
case 540:
case 59:
case 482:
case 2849:
case 3129:
case 2931:
case 2920:
case 2913:
case 3286:
case 2266:
case 2743:
case 476:
case 1790:
case 2903:
case 4001:
case 4026:
case 2445:
case 1670:
case 300:
case 2464:
case 1375:
case 2183:
case 3329:
case 1521:
case 541:
case 128:
case 3268:
case 3295:
case 2756:
case 1680:
case 1824:
case 1915:
case 339:
case 2818:
case 1646:
case 2897:
case 2490:
case 505:
case 2771:
case 2655:
case 1905:
case 1745:
case 1764:
case 3474:
case 1006:
case 1021:
case 723:
case 1075:
case 3063:
case 3029:
case 2550:
case 296:
case 3885:
case 2423:
case 2817:
case 3324:
case 1976:
case 3932:
case 3782:
case 2725:
case 2436:
case 310:
case 2626:
case 359:
case 3489:
case 1995:
case 3124:
case 2898:
case 2234:
case 2865:
case 2287:
case 48:
case 592:
case 1775:
case 1651:
case 3729:
case 3246:
case 1473:
case 1450:
case 2209:
case 3358:
case 2901:
case 2926:
case 648:
case 1510:
case 1523:
case 2343:
case 1668:
case 3498:
case 3444:
case 436:
case 2025:
case 3407:
case 3836:
case 3800:
case 3361:
case 61:
case 2062:
case 602:
case 1500:
case 63:
case 3823:
case 266:
case 2143:
case 3869:
case 3417:
case 3422:
case 2485:
case 2783:
case 3632:
case 2911:
case 1858:
case 2991:
case 4093:
case 962:
case 1861:
case 3408:
case 1300:
case 2056:
case 3497:
case 943:
case 3372:
case 1667:
case 3890:
case 1110:
case 1169:
case 1590:
case 456:
case 1323:
case 1310:
case 2071:
case 3418:
case 820:
case 1136:
case 1045:
case 1100:
case 1064:
case 3659:
case 285:
case 1730:
case 1615:
case 3157:
case 1706:
case 1721:
case 967:
case 228:
case 570:
case 3784:
case 3934:
case 3165:
case 618:
case 1150:
case 3987:
case 3737:
case 2824:
case 2680:
case 3597:
case 3144:
case 2646:
case 3317:
case 64:
case 3508:
case 1691:
case 3307:
case 2745:
case 1808:
case 1897:
case 281:
case 3660:
case 446:
case 3344:
case 3117:
case 1655:
case 533:
case 2443:
case 3365:
case 3122:
case 638:
case 2185:
case 2967:
case 1373:
case 2006:
case 3458:
case 326:
case 1288:
case 1550:
case 3988:
case 3738:
case 3565:
case 658:
case 2075:
case 3108:
case 1611:
case 1423:
case 289:
case 553:
case 1469:
case 3699:
case 3197:
case 3544:
case 2995:
case 1601:
case 3517:
case 3472:
case 1400:
case 4070:
case 2951:
case 607:
case 776:
case 1083:
case 1234:
case 3850:
case 3457:
case 971:
case 2585:
case 3038:
case 2450:
case 2473:
case 2857:
case 2695:
case 1926:
case 3374:
case 2651:
case 1181:
case 2668:
case 12:
case 1143:
case 2190:
case 1062:
case 2500:
case 964:
case 1381:
case 597:
case 429:
case 1783:
case 1911:
case 2676:
case 816:
case 669:
case 335:
case 901:
case 1485:
case 1299:
case 2716:
case 500:
case 1874:
case 3442:
case 355:
case 3037:
case 3389:
case 2110:
case 2169:
case 2336:
case 2300:
case 604:
case 340:
case 3881:
case 564:
case 2045:
case 2100:
case 3424:
case 1071:
case 3189:
case 2369:
case 1543:
case 3574:
case 185:
case 2730:
case 2980:
case 2615:
case 3201:
case 3226:
case 3749:
case 1416:
case 736:
case 4051:
case 2970:
case 3138:
case 1603:
case 3537:
case 4095:
case 305:
case 931:
case 973:
case 3677:
case 1556:
case 3179:
case 1325:
case 2545:
case 3379:
case 1571:
case 545:
case 551:
case 1837:
case 1421:
case 1406:
case 1430:
case 2292:
case 2564:
case 1884:
case 1620:
case 1613:
case 930:
case 678:
case 693:
case 283:
case 3639:
case 559:
case 3538:
case 531:
case 1773:
case 2212:
case 1750:
case 2441:
case 3463:
case 2686:
case 2640:
case 2364:
case 1475:
case 510:
case 3862:
case 3678:
case 3707:
case 614:
case 3904:
case 4067:
case 2069:
case 3089:
case 1171:
case 3825:
case 2036:
case 1562:
case 634:
case 3914:
case 2164:
case 2785:
case 3722:
case 951:
case 3337:
case 939:
case 511:
case 2306:
case 2321:
case 1541:
case 3614:
case 2116:
case 3966:
case 2425:
case 3007:
case 3482:
case 2635:
case 2710:
case 4080:
case 503:
case 3231:
case 3220:
case 3213:
case 663:
case 3939:
case 3789:
case 423:
case 1993:
case 2986:
case 2736:
case 3149:
case 2596:
case 362:
case 3978:
case 2829:
case 657:
case 343:
case 568:
case 2106:
case 2130:
case 2516:
case 1141:
case 1278:
case 3097:
case 903:
case 2456:
case 1931:
case 882:
case 1920:
case 2653:
case 2670:
case 3952:
case 1445:
case 1266:
case 3018:
case 2521:
case 968:
case 1341:
case 3774:
case 3694:
case 617:
case 1464:
case 2196:
case 1230:
case 703:
case 1206:
case 1929:
case 2492:
case 2377:
case 813:
case 163:
case 2352:
case 1032:
case 2566:
case 2893:
case 2152:
case 3540:
case 768:
case 871:
case 3068:
case 108:
case 1554:
case 853:
case 2087:
case 2719:
case 2760:
case 3645:
case 2378:
case 1354:
case 3916:
case 925:
case 1494:
case 3386:
case 867:
case 2803:
case 879:
case 2637:
case 2139:
case 2427:
case 3005:
case 2552:
case 244:
case 2178:
case 2949:
case 2241:
case 1154:
case 492:
case 2709:
case 3263:
case 3780:
case 3335:
case 1502:
case 2019:
case 2937:
case 2787:
case 3570:
case 323:
case 1192:
case 2984:
case 3413:
case 719:
case 3431:
case 384:
case 212:
case 4022:
case 3606:
case 2:
case 750:
case 2104:
case 2262:
case 3282:
case 3705:
case 2347:
case 20:
case 1128:
case 3945:
case 2114:
case 154:
case 232:
case 751:
case 1512:
case 4007:
case 3135:
case 4044:
case 3767:
case 3802:
case 798:
case 3153:
case 4018:
case 1264:
case 1102:
case 710:
case 1245:
case 2504:
case 3776:
case 936:
case 1732:
case 134:
case 3696:
case 1466:
case 2547:
case 2979:
case 1327:
case 2194:
case 1629:
case 114:
case 3493:
case 1528:
case 3675:
case 1127:
case 475:
case 1302:
case 193:
case 4008:
case 3370:
case 2811:
case 2833:
case 1092:
case 3258:
case 177:
case 169:
case 346:
case 2119:
case 3380:
case 3685:
case 3969:
case 2622:
case 3923:
case 3910:
case 2004:
case 666:
case 2047:
case 709:
case 1290:
case 4049:
case 23:
case 850:
case 2243:
case 2432:
case 1028:
case 21:
case 3786:
case 839:
case 1972:
case 851:
case 2739:
case 2599:
case 3035:
case 1957:
case 2644:
case 2698:
case 1754:
case 1487:
case 1002:
case 1880:
case 2399:
case 295:
case 1434:
case 3053:
case 3070:
case 810:
case 2094:
case 3272:
case 859:
case 1642:
case 3990:
case 906:
case 104:
case 830:
case 1210:
case 1223:
case 701:
case 25:
case 2509:
case 2891:
case 1958:
case 161:
case 2697:
case 3546:
case 3690:
case 2587:
case 803:
case 1702:
case 1419:
case 138:
case 1942:
case 3455:
case 713:
case 3491:
case 3753:
case 3770:
case 2794:
case 2748:
case 2674:
case 770:
case 1559:
case 3515:
case 1658:
case 2997:
case 794:
case 435:
case 4038:
case 3376:
case 2052:
case 1332:
case 174:
case 1409:
case 2250:
case 1712:
case 4079:
case 118:
case 3636:
case 753:
case 107:
case 2134:
case 388:
case 2965:
case 3426:
case 2689:
case 2187:
case 1672:
case 3367:
case 1657:
case 3115:
case 3576:
case 320:
case 2704:
case 767:
case 1851:
case 3305:
case 3224:
case 779:
case 272:
case 2066:
case 1532:
case 2907:
case 321:
case 3551:
case 1728:
case 3105:
case 3086:
case 3832:
case 3315:
case 455:
case 4037:
case 2917:
case 1359:
case 199:
case 3595:
case 3985:
case 1499:
case 158:
case 2922:
case 3610:
case 696:
case 2387:
case 3568:
case 3167:
case 3433:
case 2078:
case 1054:
case 2334:
case 3526:
case 3501:
case 269:
case 762:
case 1160:
case 419:
case 2488:
case 450:
case 1811:
case 277:
case 743:
case 1047:
case 13:
case 1243:
case 3476:
case 1004:
case 3495:
case 1739:
case 1665:
case 11:
case 2028:
case 3793:
case 3511:
case 1109:
case 2754:
case 2957:
case 1698:
case 3468:
case 3311:
case 2487:
case 1560:
case 2880:
case 2624:
case 2002:
case 2846:
case 3415:
case 473:
case 987:
case 3289:
case 1048:
case 3713:
case 3720:
case 1094:
case 2210:
case 2027:
case 2961:
case 3943:
case 3819:
case 3467:
case 1697:
case 1974:
case 775:
case 1509:
case 2012:
case 2285:
case 3222:
case 2460:
case 1587:
case 1188:
case 2419:
case 2867:
case 835:
case 2942:
case 238:
case 316:
case 1674:
case 2658:
case 403:
case 3217:
case 1794:
case 1748:
case 2805:
case 2332:
case 3244:
case 24:
case 290:
case 680:
case 165:
case 1918:
case 3207:
case 2815:
case 3003:
case 1388:
case 815:
case 336:
case 3681:
case 2712:
case 628:
case 1077:
case 356:
case 1965:
case 2672:
case 2792:
case 2851:
case 840:
case 2657:
case 1704:
case 2895:
case 2159:
case 792:
case 299:
case 2728:
case 3093:
case 984:
case 2054:
case 2499:
case 1387:
case 855:
case 1088:
case 3941:
case 3701:
case 306:
case 2230:
case 494:
case 4061:
case 3662:
case 3878:
case 2886:
case 1566:
case 242:
case 2447:
case 749:
case 2840:
case 3131:
case 3839:
case 263:
case 413:
case 3303:
case 1539:
case 546:
case 433:
case 1638:
case 2414:
case 3866:
case 3593:
case 3320:
case 1428:
case 3331:
case 2554:
case 715:
case 3733:
case 1177:
case 2216:
case 805:
case 208:
case 1799:
case 3470:
case 467:
case 3877:
case 3791:
case 2354:
case 217:
case 4072:
case 1283:
case 2296:
case 3671:
case 1760:
case 1402:
case 479:
case 1803:
case 3520:
case 2448:
case 2494:
case 1166:
case 17:
case 1684:
case 144:
case 3193:
case 946:
case 1637:
case 1139:
case 1577:
case 237:
case 1709:
case 921:
case 1984:
case 3091:
case 843:
case 409:
case 1060:
case 1937:
case 2502:
case 1:
case 2328:
case 1314:
case 2128:
case 10:
case 497:
case 3279:
case 2853:
case 529:
case 2512:
case 3238:
case 2264:
case 1938:
case 4024:
case 2835:
case 2312:
case 147:
case 521:
case 2592:
case 2732:
case 234:
case 3814:
case 3683:
case 1271:
case 2466:
case 152:
case 3925:
case 1979:
case 1547:
case 1504:
case 1256:
case 624:
case 3804:
case 588:
case 4042:
case 3962:
case 382:
case 2127:
case 2528:
case 1454:
case 3011:
case 3033:
case 875:
case 2302:
case 1099:
case 401:
case 293:
case 1301:
case 1326:
case 3608:
case 1133:
case 1111:
case 3752:
case 1405:
case 35:
case 517:
case 1943:
case 1703:
case 1415:
case 3094:
case 1720:
case 2272:
case 1713:
case 3048:
case 537:
case 1809:
case 2257:
case 2053:
case 1311:
case 2070:
case 1126:
case 395:
case 3618:
case 3399:
case 3607:
case 1511:
case 3778:
case 3109:
case 1355:
case 563:
case 2180:
case 3698:
case 1468:
case 3644:
case 1495:
case 557:
case 4016:
case 2786:
case 1793:
case 3014:
case 33:
case 302:
case 3432:
case 3766:
case 3243:
case 2261:
case 1476:
case 4030:
case 2923:
case 508:
case 2910:
case 3622:
case 4021:
case 4006:
case 246:
case 1526:
case 1501:
case 603:
case 1155:
case 3617:
case 3119:
case 1274:
case 3078:
case 534:
case 2433:
case 2411:
case 3334:
case 386:
case 2669:
case 2167:
case 3387:
case 611:
case 2315:
case 3917:
case 1297:
case 2105:
case 2086:
case 3907:
case 3066:
case 1218:
case 4064:
case 3998:
case 2576:
case 3944:
case 659:
case 578:
case 156:
case 698:
case 2367:
case 885:
case 3187:
case 2636:
case 514:
case 2600:
case 3134:
case 954:
case 2168:
case 2567:
case 1887:
case 3388:
case 136:
case 3250:
case 3273:
case 934:
case 1265:
case 2151:
case 639:
case 2859:
case 1207:
case 365:
case 82:
case 2376:
case 1003:
case 2395:
case 3674:
case 978:
case 2176:
case 229:
case 1031:
case 650:
case 3748:
case 3794:
case 1020:
case 1013:
case 722:
case 2491:
case 914:
case 1222:
case 2770:
case 3188:
case 2690:
case 116:
case 2455:
case 2746:
case 424:
case 4069:
case 4023:
case 3178:
case 3577:
case 664:
case 1656:
case 2005:
case 3831:
case 560:
case 3684:
case 3820:
case 977:
case 3552:
case 2186:
case 3637:
case 1503:
case 601:
case 3139:
case 2015:
case 2340:
case 1531:
case 3166:
case 2386:
case 1852:
case 1453:
case 2645:
case 785:
case 1755:
case 1671:
case 3283:
case 3402:
case 1711:
case 2068:
case 3799:
case 569:
case 1103:
case 1866:
case 960:
case 1593:
case 72:
case 3428:
case 1320:
case 1313:
case 3566:
case 1120:
case 1113:
case 766:
case 1839:
case 1303:
case 822:
case 4090:
case 1249:
case 1726:
case 2975:
case 904:
case 1662:
case 3492:
case 1878:
case 3454:
case 796:
case 2353:
case 2370:
case 1284:
case 991:
case 1962:
case 2493:
case 3514:
case 2751:
case 1847:
case 3348:
case 1925:
case 3271:
case 2696:
case 667:
case 3194:
case 2828:
case 3979:
case 3148:
case 3547:
case 3504:
case 2776:
case 918:
case 653:
case 599:
case 347:
case 990:
case 2170:
case 2135:
case 2080:
case 1238:
case 2964:
case 1894:
case 3347:
case 2616:
case 907:
case 3114:
case 2945:
case 671:
case 2403:
case 1971:
case 4085:
case 2630:
case 3104:
case 518:
case 2827:
case 3594:
case 2431:
case 670:
case 2420:
case 3649:
case 284:
case 694:
case 1956:
case 3314:
case 223:
case 574:
case 590:
case 613:
case 2335:
case 1055:
case 3787:
case 3060:
case 93:
case 902:
case 1263:
case 1229:
case 1067:
case 3275:
case 1780:
case 824:
case 2503:
case 1005:
case 1140:
case 1186:
case 1664:
case 3494:
case 3448:
case 2513:
case 2520:
case 2393:
case 1386:
case 1015:
case 948:
case 3059:
case 2671:
case 3296:
case 91:
case 1645:
case 2453:
case 1916:
case 3354:
case 1068:
case 3216:
case 3554:
case 53:
case 2711:
case 1996:
case 2733:
case 2866:
case 1586:
case 3414:
case 2320:
case 2313:
case 2103:
case 995:
case 3404:
case 548:
case 363:
case 2839:
case 3032:
case 3886:
case 2131:
case 2120:
case 3447:
case 3206:
case 1975:
case 3230:
case 95:
case 662:
case 2662:
case 3929:
case 422:
case 643:
case 2726:
case 3302:
case 2284:
case 1535:
case 378:
case 1892:
case 3478:
case 1353:
case 3663:
case 3629:
case 314:
case 3528:
case 1751:
case 789:
case 2847:
case 2804:
case 3439:
case 1795:
case 1776:
case 2814:
case 2683:
case 3982:
case 3327:
case 3312:
case 3592:
case 1153:
case 3264:
case 965:
case 3835:
case 2001:
case 827:
case 3477:
case 3870:
case 1964:
case 2238:
case 3512:
case 1135:
case 1046:
case 605:
case 1403:
case 2279:
case 2971:
case 4073:
case 4050:
case 3527:
case 2894:
case 1705:
case 1616:
case 3452:
case 354:
case 1945:
case 1827:
case 3328:
case 781:
case 184:
case 1715:
case 986:
case 1621:
case 1606:
case 3759:
case 565:
case 2055:
case 123:
case 1570:
case 3012:
case 2111:
case 3958:
case 2860:
case 361:
case 655:
case 4041:
case 3642:
case 889:
case 641:
case 3210:
case 3223:
case 2405:
case 3027:
case 2713:
case 2720:
case 640:
case 69:
case 2981:
case 3236:
case 2415:
case 3880:
case 3487:
case 2126:
case 2555:
case 3434:
case 2809:
case 544:
case 1070:
case 727:
case 1035:
case 615:
case 1146:
case 2355:
case 3957:
case 3028:
case 1740:
case 1936:
case 2793:
case 2673:
case 3972:
case 1261:
case 2476:
case 649:
case 1923:
case 1910:
case 3290:
case 3092:
case 1258:
case 369:
case 2501:
case 146:
case 2899:
case 2155:
case 1346:
case 1623:
case 358:
case 1735:
case 1985:
case 1669:
case 1433:
case 1242:
case 4056:
case 1040:
case 724:
case 547:
case 1551:
case 3728:
case 1086:
case 399:
case 3359:
case 2208:
case 1576:
case 1224:
case 3851:
case 307:
case 932:
case 1401:
case 188:
case 3868:
case 3672:
case 1367:
case 4071:
case 3712:
case 66:
case 2446:
case 1859:
case 3924:
case 2003:
case 947:
case 3332:
case 2298:
case 390:
case 1151:
case 2244:
case 3132:
case 2217:
case 2031:
case 3559:
case 1395:
case 391:
case 1368:
case 3419:
case 3867:
case 466:
case 3702:
case 216:
case 2643:
case 1455:
case 3661:
case 1491:
case 4062:
case 1770:
case 532:
case 3083:
case 3234:
case 1850:
case 2342:
case 273:
case 298:
case 688:
case 1522:
case 4002:
case 259:
case 2489:
case 231:
case 3898:
case 1472:
case 3400:
case 460:
case 3436:
case 3807:
case 2215:
case 3725:
case 4012:
case 2782:
case 1108:
case 621:
case 1779:
case 3469:
case 3817:
case 1318:
case 461:
case 2205:
case 2324:
case 3041:
case 3550:
case 2142:
case 1565:
case 2267:
case 2063:
case 1122:
case 2474:
case 126:
case 3288:
case 802:
case 4092:
case 1461:
case 2276:
case 7:
case 1307:
case 477:
case 1660:
case 469:
case 1398:
case 2524:
case 3897:
case 1518:
case 3655:
case 732:
case 1144:
case 1198:
case 81:
case 16:
case 2268:
case 1784:
case 2542:
case 1987:
case 3150:
case 2558:
case 2561:
case 140:
case 19:
case 872:
case 1634:
case 407:
case 1424:
case 2172:
case 2418:
case 3071:
case 527:
case 141:
case 2497:
case 3056:
case 1084:
case 3955:
case 1233:
case 3874:
case 886:
case 499:
case 1037:
case 1255:
case 2632:
case 1291:
case 3485:
case 491:
case 203:
case 2417:
case 366:
case 2823:
case 1589:
case 149:
case 1688:
case 2572:
case 3381:
case 2161:
case 2836:
case 3025:
case 1079:
case 2361:
case 3343:
case 2498:
case 418:
case 3209:
case 3741:
case 115:
case 2465:
case 3926:
case 2280:
case 2729:
case 980:
case 1666:
case 3496:
case 589:
case 1722:
case 253:
case 3248:
case 3294:
case 279:
case 1717:
case 3171:
case 1089:
case 3879:
case 928:
case 2928:
case 267:
case 3356:
case 3562:
case 1947:
case 844:
case 1707:
case 3156:
case 437:
case 2582:
case 1862:
case 192:
case 1798:
case 1744:
case 1904:
case 3371:
case 981:
case 1639:
case 1765:
case 3773:
case 1429:
case 3693:
case 1463:
case 2992:
case 786:
case 463:
case 2058:
case 3406:
case 3421:
case 3837:
case 1338:
case 213:
case 2912:
case 4032:
case 442:
case 3620:
case 3884:
case 3631:
case 2449:
case 623:
case 457:
case 1856:
case 2061:
case 3043:
case 1718:
case 2724:
case 3247:
case 1797:
case 3556:
case 1708:
case 1677:
case 3362:
case 1179:
case 1948:
case 765:
case 1584:
case 3416:
case 2864:
case 1537:
case 3603:
case 105:
case 2742:
case 233:
case 1648:
case 3183:
case 1977:
case 1549:
case 2363:
case 3445:
case 852:
case 3743:
case 2602:
case 75:
case 2286:
case 1097:
case 3239:
case 1008:
case 3920:
case 3931:
case 2484:
case 264:
case 3383:
case 3849:
case 2163:
case 3141:
case 2437:
case 2042:
case 175:
case 1149:
case 2954:
case 1022:
case 1604:
case 1841:
case 1220:
case 1231:
case 1939:
case 209:
case 2692:
case 2479:
case 832:
case 1203:
case 1966:
case 1007:
case 1098:
case 3252:
case 71:
case 1065:
case 3541:
case 3050:
case 3073:
case 2529:
case 1614:
case 1349:
case 2628:
case 297:
case 748:
case 2722:
case 1270:
case 1253:
case 676:
case 3785:
case 153:
case 167:
case 1928:
case 4034:
case 2914:
case 3145:
case 1072:
case 2717:
case 4087:
case 3227:
case 3069:
case 2904:
case 2579:
case 2947:
case 1654:
case 3345:
case 292:
case 1992:
case 2184:
case 3364:
case 758:
case 383:
case 3212:
case 2538:
case 1912:
case 857:
case 1058:
case 2338:
case 2074:
case 113:
case 2718:
case 3090:
case 2856:
case 3545:
case 791:
case 170:
case 1927:
case 1061:
case 1845:
case 1182:
case 2179:
case 2871:
case 2797:
case 3228:
case 171:
case 808:
case 1902:
case 1742:
case 1864:
case 3953:
case 1235:
case 452:
case 2648:
case 1816:
case 2694:
case 1363:
case 3196:
case 3506:
case 327:
case 3521:
case 3471:
case 2952:
case 447:
case 3653:
case 3670:
case 834:
case 3456:
case 1612:
case 814:
case 1286:
case 101:
case 704:
case 3254:
case 893:
case 1830:
case 1821:
case 966:
case 1437:
case 3516:
case 1627:
case 1129:
case 164:
case 4:
case 3085:
case 2022:
case 243:
case 2841:
case 52:
case 1757:
case 3121:
case 3106:
case 262:
case 3863:
case 2978:
case 2149:
case 3316:
case 3940:
case 1692:
case 3462:
case 1772:
case 2017:
case 4019:
case 2789:
case 109:
case 985:
case 2044:
case 3769:
case 2203:
case 2007:
case 2966:
case 4009:
case 2614:
case 2349:
case 1563:
case 3116:
case 432:
case 3575:
case 566:
case 3306:
case 2457:
case 2873:
case 1342:
case 4048:
case 3096:
case 2308:
case 3259:
case 1215:
case 3951:
case 2517:
case 2118:
case 1489:
case 2397:
case 495:
case 2699:
case 2318:
case 389:
case 111:
case 2544:
case 2598:
case 1324:
case 804:
case 793:
case 3075:
case 45:
case 2738:
case 922:
case 2565:
case 43:
case 226:
case 877:
case 402:
case 3185:
case 2365:
case 2122:
case 616:
case 869:
case 4004:
case 2458:
case 3967:
case 2344:
case 381:
case 3443:
case 2518:
case 3745:
case 3481:
case 2508:
case 2107:
case 2144:
case 3915:
case 1251:
case 448:
case 3824:
case 2597:
case 3646:
case 139:
case 3385:
case 522:
case 2737:
case 3016:
case 26:
case 1268:
case 2749:
case 2201:
case 2909:
case 4066:
case 3064:
case 717:
case 1659:
case 2574:
case 1157:
case 3721:
case 3706:
case 2424:
case 3369:
case 3323:
case 3310:
case 2881:
case 2634:
case 68:
case 240:
case 1561:
case 3100:
case 3045:
case 4078:
case 3336:
case 1890:
case 241:
case 1372:
case 3667:
case 3169:
case 737:
case 255:
case 1357:
case 2960:
case 3858:
case 2037:
case 2084:
case 1158:
case 1557:
case 2291:
case 3676:
case 235:
case 103:
case 2174:
case 3796:
case 1632:
case 3500:
case 763:
case 1161:
case 1417:
case 1810:
case 2688:
case 742:
case 168:
case 3510:
case 3523:
case 3390:
case 3668:
case 1082:
case 84:
case 3775:
case 1280:
case 4052:
case 708:
case 1246:
case 625:
case 1729:
case 3857:
case 1358:
case 818:
case 2038:
case 215:
case 2374:
case 1465:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1760353201/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [0,1,1,0,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,1,0,0,1,0,1,0,1,1,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,1,0,0,1,1,1,0,1,1,0,1,0,0,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,1,0,1,1,0,1,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,1,1,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,0,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,1,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,0,0,1,0,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,1,0,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,1,0,0,1,0,1,1,1,0,1,1,0,1,1,0,1,1,1,0,0,1,0,1,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,1,1,0,0,0,1,1,1,1,0,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,1,1,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,0,0,0,1,0,1,1,0,1,1,1,1,1,0,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,0,1,1,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,1,1,1,0,0,0,1,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,1,1,1,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,0,1,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,0,0,0,1,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,1,0,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,1,0,0,1,0,1,1,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,1,0,0,0,1,0,1,0,1,1,1,1,1,1,0,0,1,0,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,1,1,1,0,1,0,0,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,0,0,1,1,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,0,1,1,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,1,1,1,0,1,1,1,0,1,0,1,1,0,0,1,0,1,1,1,1,1,1,0,0,1,0,0,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,1,1,0,0,1,1,1,1,0,0,1,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,0,1,0,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,0,1,0,1,1,0,1,0,0,0,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,0,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,0,1,1,1,0,1,0,1,1,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,0,1,1,0,0,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,1,0,1,0,1,0,0,1,1,1,1,0,1,0,1,1,0,0,1,1,1,1,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,1,1,0,1,1,1,1,0,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,1,1,1,0,1,0,1,0,0,1,0,0,1,1,0,1,1,0,1,0,1,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,0,0,0,1,1,1,0,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,0,0,0,1,0,1,1,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,1,0,1,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,1,0,1,0,1,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,1,1,0,1,1,1,0,0,0,0,1,1,1,0,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,0,0,0,1,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,0,1,0,0,1,0,1,1,0,1,];
var gg_b = "1760353201/";

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
