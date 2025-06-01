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
case 2359:
case 1904:
case 3873:
case 2396:
case 2402:
case 923:
case 2760:
case 2370:
case 1317:
case 3064:
case 1930:
case 2512:
case 4076:
case 2034:
case 3655:
case 3730:
case 4090:
case 2000:
case 2081:
case 2290:
case 3704:
case 2762:
case 1385:
case 1932:
case 741:
case 845:
case 2434:
case 622:
case 750:
case 2846:
case 3464:
case 1623:
case 1520:
case 2613:
case 2510:
case 1169:
case 892:
case 1884:
case 278:
case 3168:
case 3732:
case 4092:
case 1907:
case 2160:
case 1519:
case 2529:
case 797:
case 2324:
case 3104:
case 986:
case 1352:
case 3707:
case 120:
case 1409:
case 3890:
case 3682:
case 263:
case 1256:
case 2616:
case 1261:
case 1626:
case 2162:
case 3132:
case 3768:
case 218:
case 520:
case 3892:
case 1887:
case 12:
case 3855:
case 1344:
case 877:
case 2386:
case 2069:
case 4080:
case 1558:
case 4001:
case 2091:
case 2280:
case 1102:
case 3354:
case 3527:
case 3673:
case 1845:
case 3570:
case 2491:
case 2888:
case 1395:
case 3937:
case 3310:
case 1737:
case 2282:
case 323:
case 2967:
case 3439:
case 1181:
case 3216:
case 2625:
case 2255:
case 1347:
case 1062:
case 548:
case 3690:
case 817:
case 4055:
case 3902:
case 1328:
case 704:
case 108:
case 3880:
case 3801:
case 744:
case 3692:
case 3288:
case 1289:
case 1687:
case 1060:
case 2643:
case 3882:
case 219:
case 1826:
case 1700:
case 3293:
case 2733:
case 3166:
case 3065:
case 866:
case 2896:
case 3373:
case 646:
case 1817:
case 2859:
case 211:
case 112:
case 4042:
case 3610:
case 4078:
case 606:
case 1331:
case 2346:
case 2435:
case 2278:
case 2971:
case 512:
case 3465:
case 4040:
case 670:
case 1885:
case 2398:
case 3403:
case 748:
case 144:
case 2893:
case 3766:
case 1249:
case 3390:
case 1647:
case 977:
case 392:
case 2325:
case 1852:
case 2683:
case 2580:
case 504:
case 3842:
case 1814:
case 271:
case 3006:
case 172:
case 2501:
case 3657:
case 3227:
case 2736:
case 1966:
case 345:
case 1951:
case 1258:
case 1850:
case 1879:
case 3878:
case 3406:
case 3392:
case 3516:
case 3840:
case 353:
case 2573:
case 2257:
case 2670:
case 2627:
case 4029:
case 2441:
case 3283:
case 1436:
case 3854:
case 242:
case 3911:
case 2659:
case 1711:
case 2721:
case 150:
case 2648:
case 501:
case 295:
case 1844:
case 886:
case 3355:
case 55:
case 541:
case 1556:
case 2906:
case 2672:
case 202:
case 3810:
case 15:
case 1323:
case 1895:
case 2388:
case 635:
case 2041:
case 1135:
case 3857:
case 3380:
case 953:
case 597:
case 2254:
case 1614:
case 3642:
case 2624:
case 3301:
case 2883:
case 1828:
case 3829:
case 4054:
case 4012:
case 3071:
case 1652:
case 1222:
case 72:
case 2316:
case 945:
case 1326:
case 233:
case 3935:
case 3471:
case 3543:
case 2210:
case 1220:
case 377:
case 1735:
case 992:
case 4010:
case 720:
case 652:
case 2903:
case 2592:
case 709:
case 1679:
case 1753:
case 3045:
case 3146:
case 1535:
case 2489:
case 1943:
case 228:
case 510:
case 864:
case 1664:
case 3232:
case 2868:
case 2792:
case 408:
case 1839:
case 3198:
case 1199:
case 3953:
case 2262:
case 1161:
case 1156:
case 1055:
case 644:
case 3094:
case 2776:
case 51:
case 2807:
case 3204:
case 2351:
case 604:
case 3725:
case 3230:
case 2260:
case 1925:
case 2915:
case 448:
case 331:
case 4060:
case 3445:
case 3336:
case 2173:
case 2192:
case 3999:
case 1001:
case 1998:
case 612:
case 17:
case 934:
case 3956:
case 570:
case 146:
case 3268:
case 3961:
case 3746:
case 1761:
case 2931:
case 506:
case 1799:
case 3426:
case 4038:
case 3798:
case 39:
case 1511:
case 2521:
case 3125:
case 2804:
case 3097:
case 2190:
case 1608:
case 3609:
case 2176:
case 2075:
case 3860:
case 2773:
case 106:
case 2363:
case 2305:
case 1401:
case 913:
case 229:
case 1303:
case 1639:
case 2499:
case 200:
case 1775:
case 409:
case 1189:
case 884:
case 1864:
case 237:
case 276:
case 3188:
case 1073:
case 3484:
case 1916:
case 20:
case 2780:
case 251:
case 152:
case 3031:
case 1473:
case 3551:
case 2061:
case 957:
case 2099:
case 1281:
case 1988:
case 990:
case 389:
case 1175:
case 313:
case 1200:
case 535:
case 765:
case 650:
case 1234:
case 861:
case 1492:
case 216:
case 3487:
case 1789:
case 3563:
case 3660:
case 1202:
case 2604:
case 1490:
case 2533:
case 2630:
case 334:
case 961:
case 2950:
case 2022:
case 3044:
case 2979:
case 1339:
case 3338:
case 890:
case 1603:
case 1410:
case 1054:
case 3495:
case 267:
case 1993:
case 1454:
case 62:
case 869:
case 3836:
case 1502:
case 1158:
case 89:
case 1010:
case 2952:
case 381:
case 3263:
case 888:
case 2914:
case 2233:
case 3148:
case 649:
case 1412:
case 497:
case 2422:
case 2851:
case 3047:
case 522:
case 259:
case 1871:
case 2140:
case 1029:
case 3028:
case 0:
case 1606:
case 2985:
case 2332:
case 1972:
case 1057:
case 441:
case 1241:
case 2236:
case 3759:
case 939:
case 1758:
case 3124:
case 3949:
case 401:
case 3360:
case 1429:
case 3796:
case 2419:
case 2863:
case 122:
case 221:
case 3770:
case 2509:
case 3833:
case 927:
case 1996:
case 2330:
case 3193:
case 3748:
case 3447:
case 3621:
case 3958:
case 3251:
case 1749:
case 2058:
case 3568:
case 472:
case 608:
case 2110:
case 287:
case 834:
case 3017:
case 710:
case 1591:
case 3974:
case 3085:
case 4021:
case 1983:
case 2221:
case 2928:
case 1918:
case 3507:
case 1122:
case 2112:
case 3417:
case 813:
case 3636:
case 889:
case 2757:
case 3783:
case 648:
case 2947:
case 1174:
case 1720:
case 964:
case 1235:
case 1806:
case 1478:
case 3014:
case 3479:
case 3977:
case 2562:
case 339:
case 2712:
case 3530:
case 3452:
case 746:
case 3821:
case 3183:
case 1078:
case 3414:
case 3079:
case 1442:
case 2157:
case 2605:
case 2944:
case 3922:
case 185:
case 2663:
case 2560:
case 873:
case 774:
case 2520:
case 795:
case 2253:
case 2577:
case 1613:
case 891:
case 2884:
case 1292:
case 1002:
case 3689:
case 3861:
case 3856:
case 742:
case 1434:
case 2932:
case 2385:
case 3899:
case 3349:
case 1081:
case 380:
case 999:
case 1000:
case 2522:
case 3544:
case 702:
case 1512:
case 3960:
case 2317:
case 1554:
case 416:
case 2645:
case 1760:
case 2904:
case 3358:
case 2791:
case 22:
case 3284:
case 2769:
case 830:
case 714:
case 2379:
case 1437:
case 1738:
case 2697:
case 3739:
case 1616:
case 2261:
case 4061:
case 807:
case 2299:
case 2409:
case 847:
case 1037:
case 2815:
case 1825:
case 83:
case 2314:
case 1160:
case 667:
case 3528:
case 3007:
case 3661:
case 3226:
case 2134:
case 179:
case 3699:
case 2181:
case 1282:
case 2100:
case 2684:
case 126:
case 2823:
case 36:
case 1469:
case 3377:
case 3164:
case 980:
case 2395:
case 2631:
case 1888:
case 998:
case 1908:
case 2102:
case 3909:
case 2558:
case 3068:
case 1069:
case 658:
case 1386:
case 2549:
case 3407:
case 3708:
case 526:
case 98:
case 2344:
case 1816:
case 2700:
case 2781:
case 3004:
case 624:
case 771:
case 875:
case 2734:
case 1643:
case 3875:
case 1540:
case 3030:
case 3223:
case 3374:
case 3653:
case 4089:
case 3764:
case 3579:
case 3432:
case 3245:
case 519:
case 1383:
case 583:
case 2702:
case 1318:
case 428:
case 1109:
case 3108:
case 2347:
case 1255:
case 3404:
case 1872:
case 2885:
case 3399:
case 1240:
case 3771:
case 3361:
case 654:
case 1971:
case 7:
case 3677:
case 3523:
case 33:
case 3858:
case 1859:
case 779:
case 458:
case 212:
case 1035:
case 1136:
case 3214:
case 3933:
case 3252:
case 2644:
case 330:
case 1686:
case 2905:
case 204:
case 1582:
case 915:
case 3597:
case 880:
case 2879:
case 2387:
case 156:
case 3674:
case 2628:
case 2258:
case 2951:
case 1736:
case 3619:
case 171:
case 783:
case 1683:
case 1824:
case 2814:
case 2421:
case 4049:
case 1325:
case 2315:
case 2852:
case 2647:
case 1133:
case 2249:
case 3936:
case 1893:
case 1041:
case 4074:
case 2135:
case 2036:
case 3531:
case 930:
case 421:
case 2895:
case 2323:
case 2274:
case 595:
case 201:
case 3706:
case 1906:
case 2685:
case 1672:
case 2599:
case 3165:
case 3051:
case 2561:
case 778:
case 3451:
case 502:
case 3822:
case 947:
case 250:
case 3649:
case 1229:
case 1659:
case 3228:
case 142:
case 241:
case 1441:
case 2436:
case 4019:
case 2345:
case 1696:
case 375:
case 1670:
case 2679:
case 60:
case 4077:
case 651:
case 4020:
case 991:
case 1965:
case 2650:
case 1210:
case 2220:
case 2735:
case 2033:
case 3765:
case 133:
case 3375:
case 297:
case 640:
case 2397:
case 2847:
case 3515:
case 1121:
case 86:
case 2222:
case 1693:
case 2433:
case 718:
case 315:
case 676:
case 1818:
case 1254:
case 1883:
case 64:
case 3405:
case 533:
case 3088:
case 3990:
case 3976:
case 656:
case 3602:
case 332:
case 2455:
case 1366:
case 419:
case 1807:
case 2161:
case 2156:
case 3565:
case 1987:
case 1262:
case 3634:
case 2199:
case 2839:
case 1792:
case 3184:
case 21:
case 671:
case 724:
case 3488:
case 3787:
case 2753:
case 1489:
case 2480:
case 426:
case 1305:
case 2401:
case 1363:
case 206:
case 2082:
case 1075:
case 1176:
case 3973:
case 1804:
case 1521:
case 1984:
case 882:
case 3416:
case 2371:
case 1238:
case 2946:
case 2761:
case 2269:
case 4091:
case 3187:
case 246:
case 1832:
case 4069:
case 2001:
case 140:
case 576:
case 3901:
case 3980:
case 1209:
case 1056:
case 1061:
case 463:
case 3802:
case 500:
case 529:
case 2541:
case 418:
case 1780:
case 2916:
case 14:
case 1997:
case 176:
case 540:
case 614:
case 551:
case 1461:
case 50:
case 3194:
case 2639:
case 3800:
case 3726:
case 2303:
case 3797:
case 2476:
case 1945:
case 3043:
case 1630:
case 1533:
case 1604:
case 943:
case 1101:
case 759:
case 478:
case 1053:
case 3745:
case 1994:
case 2789:
case 116:
case 642:
case 2492:
case 3264:
case 1632:
case 721:
case 862:
case 2234:
case 3025:
case 3126:
case 3837:
case 2175:
case 3794:
case 2200:
case 3571:
case 1182:
case 3443:
case 674:
case 433:
case 1866:
case 74:
case 663:
case 1307:
case 567:
case 776:
case 2924:
case 3486:
case 1952:
case 1077:
case 2010:
case 618:
case 382:
case 3714:
case 2158:
case 2993:
case 729:
case 3841:
case 3635:
case 803:
case 2054:
case 1420:
case 3369:
case 3779:
case 1368:
case 3978:
case 2581:
case 3185:
case 2339:
case 3086:
case 751:
case 414:
case 2534:
case 1740:
case 925:
case 2665:
case 1304:
case 3152:
case 1330:
case 3508:
case 2970:
case 2927:
case 1509:
case 222:
case 1863:
case 121:
case 3418:
case 265:
case 1419:
case 1142:
case 402:
case 2457:
case 3114:
case 2948:
case 2241:
case 1805:
case 1236:
case 678:
case 3567:
case 2972:
case 3179:
case 3083:
case 2029:
case 3150:
case 1019:
case 1140:
case 495:
case 159:
case 474:
case 3785:
case 832:
case 1458:
case 1757:
case 3302:
case 3496:
case 3427:
case 3144:
case 2122:
case 1112:
case 1666:
case 1928:
case 1651:
case 2211:
case 728:
case 587:
case 3072:
case 1538:
case 2803:
case 3539:
case 1049:
case 2865:
case 3334:
case 982:
case 2591:
case 3195:
case 2364:
case 2569:
case 2120:
case 2177:
case 1058:
case 3128:
case 2119:
case 2442:
case 2986:
case 626:
case 3147:
case 3811:
case 3954:
case 3493:
case 2308:
case 1712:
case 3093:
case 1995:
case 3203:
case 1562:
case 754:
case 158:
case 2042:
case 2367:
case 2720:
case 2806:
case 2174:
case 3280:
case 3091:
case 1909:
case 2570:
case 2673:
case 1517:
case 747:
case 160:
case 3386:
case 2039:
case 443:
case 1708:
case 73:
case 978:
case 403:
case 379:
case 3282:
case 1699:
case 2439:
case 4016:
case 1377:
case 2310:
case 2937:
case 326:
case 1468:
case 3646:
case 560:
case 814:
case 1164:
case 3542:
case 2801:
case 1245:
case 3318:
case 2329:
case 1319:
case 1108:
case 3109:
case 2902:
case 2676:
case 1404:
case 3625:
case 802:
case 1552:
case 3816:
case 2882:
case 3643:
case 383:
case 319:
case 4088:
case 1764:
case 895:
case 1223:
case 791:
case 286:
case 2213:
case 1653:
case 1432:
case 1167:
case 432:
case 2981:
case 2692:
case 3578:
case 2900:
case 3348:
case 180:
case 3276:
case 4025:
case 2704:
case 3512:
case 3402:
case 2873:
case 3370:
case 3554:
case 979:
case 3359:
case 1962:
case 378:
case 3002:
case 580:
case 2464:
case 3688:
case 3292:
case 1861:
case 871:
case 3400:
case 3762:
case 3138:
case 1899:
case 775:
case 3372:
case 3393:
case 2130:
case 2707:
case 496:
case 2890:
case 2104:
case 3037:
case 2342:
case 3324:
case 3557:
case 2601:
case 983:
case 2067:
case 3160:
case 266:
case 1284:
case 318:
case 3939:
case 682:
case 1231:
case 3616:
case 1739:
case 2969:
case 2008:
case 363:
case 3843:
case 2812:
case 395:
case 1247:
case 342:
case 2218:
case 4083:
case 3257:
case 3573:
case 175:
case 2854:
case 798:
case 3441:
case 2283:
case 780:
case 2546:
case 1531:
case 217:
case 3041:
case 2810:
case 1584:
case 3313:
case 3672:
case 3906:
case 594:
case 1066:
case 1051:
case 2525:
case 314:
case 3590:
case 3693:
case 3818:
case 115:
case 879:
case 1819:
case 2380:
case 2857:
case 1405:
case 3624:
case 2642:
case 2678:
case 482:
case 1005:
case 3210:
case 1587:
case 1874:
case 2935:
case 333:
case 1375:
case 515:
case 2705:
case 311:
case 3859:
case 3896:
case 2654:
case 1214:
case 2373:
case 2224:
case 2763:
case 107:
case 3827:
case 3870:
case 1545:
case 3733:
case 2166:
case 76:
case 643:
case 3686:
case 2293:
case 130:
case 547:
case 2003:
case 1399:
case 3240:
case 3398:
case 507:
case 1356:
case 1361:
case 1771:
case 530:
case 3435:
case 3278:
case 655:
case 147:
case 3346:
case 995:
case 2629:
case 2259:
case 2163:
case 3736:
case 4070:
case 4027:
case 3618:
case 3824:
case 2842:
case 4059:
case 3683:
case 2657:
case 2270:
case 2227:
case 2006:
case 878:
case 292:
case 191:
case 3893:
case 2941:
case 2248:
case 1936:
case 2766:
case 3133:
case 2840:
case 253:
case 3343:
case 1285:
case 632:
case 425:
case 2878:
case 205:
case 2113:
case 3997:
case 2484:
case 2975:
case 1446:
case 337:
case 615:
case 2188:
case 1267:
case 3782:
case 3456:
case 3461:
case 1834:
case 329:
case 1498:
case 1726:
case 2716:
case 3209:
case 1208:
case 1901:
case 2566:
case 2031:
case 1046:
case 1145:
case 596:
case 351:
case 694:
case 3994:
case 824:
case 3632:
case 1837:
case 2116:
case 480:
case 1197:
case 1443:
case 1571:
case 213:
case 3533:
case 3755:
case 1043:
case 887:
case 3945:
case 2321:
case 3604:
case 1311:
case 498:
case 1425:
case 3180:
case 2087:
case 2660:
case 2563:
case 1634:
case 821:
case 725:
case 90:
case 2953:
case 691:
case 1503:
case 1600:
case 3868:
case 1413:
case 1184:
case 4032:
case 257:
case 3489:
case 1131:
case 940:
case 1891:
case 1488:
case 3089:
case 3173:
case 3260:
case 2023:
case 1013:
case 231:
case 937:
case 1715:
case 3807:
case 94:
case 3776:
case 2094:
case 3366:
case 3790:
case 1416:
case 2426:
case 3984:
case 2497:
case 29:
case 1637:
case 3238:
case 3931:
case 143:
case 269:
case 2956:
case 2961:
case 1731:
case 2999:
case 1784:
case 288:
case 3832:
case 2860:
case 499:
case 3363:
case 1973:
case 2333:
case 867:
case 3176:
case 2609:
case 1115:
case 2026:
case 2207:
case 3521:
case 916:
case 1381:
case 1539:
case 2485:
case 3538:
case 1300:
case 525:
case 562:
case 2974:
case 2017:
case 1070:
case 1206:
case 1835:
case 1195:
case 3058:
case 3110:
case 3458:
case 1459:
case 3154:
case 2718:
case 1496:
case 3729:
case 1302:
case 2507:
case 1929:
case 816:
case 2919:
case 1957:
case 3449:
case 2085:
case 967:
case 1747:
case 1448:
case 324:
case 239:
case 1203:
case 1093:
case 851:
case 3562:
case 660:
case 80:
case 921:
case 227:
case 703:
case 2014:
case 2479:
case 2450:
case 1795:
case 2050:
case 2922:
case 3129:
case 447:
case 3944:
case 699:
case 43:
case 3605:
case 1424:
case 2079:
case 1811:
case 84:
case 876:
case 1744:
case 2530:
case 2633:
case 284:
case 1564:
case 854:
case 415:
case 1940:
case 1635:
case 1779:
case 3368:
case 1369:
case 3477:
case 3420:
case 1086:
case 3979:
case 1271:
case 3950:
case 3307:
case 3866:
case 2444:
case 1486:
case 987:
case 2148:
case 796:
case 182:
case 3952:
case 3077:
case 2159:
case 3020:
case 2836:
case 2127:
case 2170:
case 2095:
case 2196:
case 3178:
case 238:
case 1567:
case 3474:
case 3019:
case 475:
case 2028:
case 359:
case 2047:
case 2362:
case 2772:
case 1785:
case 698:
case 1152:
case 2748:
case 2266:
case 1611:
case 2251:
case 3509:
case 2833:
case 3917:
case 958:
case 2796:
case 3074:
case 3419:
case 2360:
case 2727:
case 2770:
case 1717:
case 3863:
case 1418:
case 3805:
case 68:
case 3236:
case 2949:
case 2124:
case 2889:
case 3631:
case 2468:
case 490:
case 1310:
case 2320:
case 26:
case 3181:
case 1572:
case 4026:
case 3438:
case 123:
case 3737:
case 3100:
case 1216:
case 2656:
case 2007:
case 2297:
case 684:
case 3134:
case 2708:
case 2407:
case 1312:
case 469:
case 3344:
case 260:
case 2068:
case 3558:
case 627:
case 1527:
case 1673:
case 2517:
case 3845:
case 897:
case 2909:
case 3102:
case 850:
case 909:
case 2167:
case 348:
case 431:
case 1692:
case 2374:
case 1213:
case 2030:
case 2875:
case 3700:
case 841:
case 3897:
case 3781:
case 92:
case 3347:
case 2552:
case 2404:
case 85:
case 3615:
case 2430:
case 2108:
case 1690:
case 4045:
case 3460:
case 3702:
case 1329:
case 1880:
case 1357:
case 308:
case 2139:
case 3385:
case 872:
case 434:
case 2861:
case 2856:
case 844:
case 1464:
case 2595:
case 1732:
case 1168:
case 3623:
case 3520:
case 3577:
case 3253:
case 468:
case 2358:
case 638:
case 3317:
case 3645:
case 1730:
case 1107:
case 1225:
case 1655:
case 2215:
case 2960:
case 2544:
case 3522:
case 4015:
case 280:
case 2675:
case 1991:
case 1298:
case 908:
case 3697:
case 3626:
case 2231:
case 2938:
case 1246:
case 3769:
case 4084:
case 3379:
case 1467:
case 3350:
case 4031:
case 3887:
case 166:
case 3519:
case 1518:
case 2528:
case 1680:
case 1601:
case 1342:
case 3815:
case 736:
case 1104:
case 1890:
case 309:
case 1408:
case 1130:
case 1707:
case 3394:
case 3561:
case 2051:
case 2103:
case 1598:
case 3599:
case 3685:
case 3323:
case 35:
case 1810:
case 2706:
case 2584:
case 1546:
case 2389:
case 3135:
case 3895:
case 3345:
case 1283:
case 3436:
case 275:
case 2921:
case 341:
case 1218:
case 848:
case 4047:
case 3711:
case 3844:
case 1812:
case 1355:
case 2466:
case 2451:
case 2703:
case 3397:
case 1935:
case 1382:
case 397:
case 2587:
case 4095:
case 3553:
case 3277:
case 3650:
case 2005:
case 2295:
case 944:
case 2405:
case 3614:
case 1642:
case 1857:
case 904:
case 2819:
case 1829:
case 3433:
case 673:
case 1071:
case 3111:
case 2515:
case 23:
case 2250:
case 2523:
case 3384:
case 4050:
case 3589:
case 247:
case 3695:
case 3331:
case 820:
case 809:
case 950:
case 2771:
case 941:
case 484:
case 1403:
case 2399:
case 2849:
case 69:
case 1293:
case 230:
case 3963:
case 1612:
case 95:
case 1166:
case 1065:
case 669:
case 82:
case 207:
case 3141:
case 2933:
case 1224:
case 1373:
case 427:
case 4014:
case 312:
case 3850:
case 3387:
case 105:
case 592:
case 2674:
case 2353:
case 1392:
case 1878:
case 631:
case 4085:
case 1516:
case 2597:
case 2285:
case 1376:
case 2936:
case 192:
case 291:
case 3647:
case 1270:
case 1105:
case 372:
case 1842:
case 553:
case 997:
case 3814:
case 3628:
case 4017:
case 3966:
case 145:
case 657:
case 3951:
case 3258:
case 1259:
case 2619:
case 1163:
case 573:
case 2802:
case 677:
case 636:
case 2046:
case 1551:
case 4008:
case 1566:
case 1716:
case 1638:
case 2881:
case 885:
case 3365:
case 3775:
case 3237:
case 1188:
case 3073:
case 2267:
case 393:
case 1431:
case 3189:
case 2335:
case 3864:
case 3916:
case 1484:
case 2745:
case 1087:
case 335:
case 2955:
case 3202:
case 513:
case 1505:
case 589:
case 3092:
case 2425:
case 738:
case 97:
case 1809:
case 2043:
case 568:
case 3490:
case 2571:
case 3200:
case 1989:
case 3175:
case 113:
case 2443:
case 3281:
case 906:
case 2126:
case 1116:
case 534:
case 2264:
case 3306:
case 3789:
case 1487:
case 4064:
case 1788:
case 1094:
case 1725:
case 993:
case 557:
case 131:
case 1023:
case 2013:
case 2602:
case 1336:
case 1445:
case 2976:
case 3664:
case 1232:
case 2184:
case 31:
case 2681:
case 2992:
case 2503:
case 1198:
case 692:
case 3839:
case 2565:
case 3161:
case 952:
case 3156:
case 1743:
case 2634:
case 1494:
case 1097:
case 2115:
case 1026:
case 1125:
case 1207:
case 3511:
case 203:
case 3082:
case 1333:
case 255:
case 3480:
case 569:
case 3401:
case 190:
case 3080:
case 3001:
case 2506:
case 346:
case 1268:
case 2187:
case 243:
case 3371:
case 3761:
case 1143:
case 3756:
case 1497:
case 2637:
case 19:
case 935:
case 2416:
case 2747:
case 2957:
case 1186:
case 2144:
case 453:
case 1507:
case 3719:
case 2641:
case 2302:
case 1636:
case 2470:
case 2427:
case 686:
case 1718:
case 2728:
case 2459:
case 1783:
case 262:
case 161:
case 225:
case 3120:
case 3569:
case 3774:
case 2070:
case 1017:
case 3364:
case 731:
case 3865:
case 2334:
case 835:
case 2300:
case 492:
case 1485:
case 2539:
case 1633:
case 1530:
case 788:
case 184:
case 893:
case 527:
case 1309:
case 2744:
case 2811:
case 1821:
case 3986:
case 3442:
case 2424:
case 3078:
case 1118:
case 1050:
case 2912:
case 1450:
case 3174:
case 2795:
case 584:
case 1532:
case 3367:
case 3777:
case 1977:
case 4003:
case 139:
case 2203:
case 3502:
case 1196:
case 666:
case 1095:
case 1836:
case 436:
case 3454:
case 1170:
case 181:
case 282:
case 1263:
case 3010:
case 3158:
case 2714:
case 1148:
case 87:
case 2486:
case 2942:
case 3924:
case 3412:
case 846:
case 1793:
case 3012:
case 4071:
case 1044:
case 2978:
case 3500:
case 3603:
case 2086:
case 1172:
case 2369:
case 3410:
case 2564:
case 2940:
case 1949:
case 1124:
case 3758:
case 789:
case 1759:
case 3948:
case 2717:
case 1770:
case 1428:
case 322:
case 2418:
case 417:
case 3927:
case 1193:
case 3996:
case 768:
case 164:
case 3749:
case 1621:
case 1251:
case 2611:
case 1772:
case 3537:
case 1362:
case 3029:
case 2150:
case 3057:
case 734:
case 2567:
case 810:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1748736001/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,0,0,0,0,0,0,1,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,1,0,0,0,1,0,0,0,0,1,0,1,0,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,0,1,1,0,0,0,0,0,0,1,1,1,1,0,0,0,1,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,1,1,1,0,0,1,0,1,0,0,0,1,0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,1,0,0,0,0,1,1,1,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,0,0,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,0,1,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,1,0,0,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,0,1,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,0,1,0,1,0,1,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,1,1,0,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,0,1,1,0,1,0,1,1,1,0,1,1,1,0,1,0,0,1,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,1,1,1,1,1,1,0,0,1,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,1,0,0,1,1,1,0,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,0,0,0,1,1,0,1,1,0,1,1,1,0,0,1,0,0,1,1,0,1,0,0,1,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,0,0,1,0,1,1,0,1,0,0,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,1,0,1,0,1,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,1,0,0,1,1,0,0,0,0,1,0,1,0,1,1,1,1,0,1,0,1,1,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,1,0,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,0,1,1,0,0,1,1,0,1,1,0,1,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,0,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,1,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,0,0,1,1,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,0,1,0,0,0,1,1,1,0,1,0,0,0,1,0,0,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,0,0,1,0,1,1,0,0,1,0,0,1,1,0,0,0,0,0,0,1,1,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,0,0,1,1,1,1,1,1,0,0,1,1,0,0,1,0,1,0,0,0,1,0,0,0,1,1,1,1,1,0,0,1,0,0,0,0,0,1,1,1,0,0,1,0,0,0,1,1,0,0,1,1,1,0,0,1,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,1,0,1,0,0,1,0,1,1,1,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,1,0,1,1,0,0,0,0,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,0,1,0,0,0,0,1,1,0,0,1,0,1,1,1,1,0,1,1,0,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,0,0,0,0,0,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,1,0,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,0,1,0,1,0,1,1,0,0,1,0,0,0,1,1,0,0,0,1,1,0,0,0,1,0,0,0,1,0,1,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,0,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,1,0,0,1,0,1,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,1,1,1,0,1,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,0,1,1,1,1,0,0,1,1,0,1,1,1,0,0,0,1,1,0,1,1,1,1,0,0,0,1,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,1,1,1,0,0,1,0,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,1,1,0,0,0,0,1,0,1,0,1,0,1,0,0,1,1,0,1,1,0,1,0,0,1,0,1,0,0,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,1,1,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,0,0,0,1,1,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,1,0,1,1,0,1,0,0,0,1,0,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,0,1,1,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,1,0,1,1,1,1,1,1,1,0,0,0,1,0,1,0,1,1,1,0,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,1,1,0,1,1,0,0,0,0,1,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,1,1,1,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,0,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,1,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,1,0,1,1,0,1,0,0,1,1,0,0,1,1,1,0,1,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,1,0,1,1,0,1,0,0,0,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,1,0,1,0,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,0,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,0,1,0,1,1,1,0,1,0,0,0,1,0,0,0,0,0,1,1,0,0,0,0,0,1,1,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,0,0,1,0,1,0,1,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,1,0,0,0,1,1,1,0,1,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1,1,0,0,1,1,1,0,1,0,0,0,0,1,1,1,1,0,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,1,1,0,0,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,0,1,0,1,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,1,1,1,0,1,0,0,0,0,1,0,0,0,0,0,1,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,1,0,1,0,1,0,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,0,1,0,1,0,1,1,0,0,1,1,0,0,0,0,0,1,0,0,1,0,0,1,0,1,1,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,1,0,0,0,1,0,1,0,0,0,0,1,1,1,0,1,1,0,0,1,1,0,0,1,1,1,1,1,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,1,1,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,0,1,1,1,0,1,0,1,1,1,1,1,0,1,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,0,0,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,0,1,1,0,1,1,1,0,1,1,0,1,0,1,0,1,1,0,1,0,1,0,1,1,1,0,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,1,1,0,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,1,1,1,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,1,0,0,0,1,0,1,1,1,0,1,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,1,1,1,1,1,1,1,0,1,1,1,1,0,1,0,1,0,0,1,0,1,0,0,1,0,1,0,1,0,0,0,0,1,0,0,1,0,1,1,0,1,1,1,0,1,0,1,1,0,0,0,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,1,0,1,1,1,0,1,0,0,0,0,1,1,0,0,1,1,1,1,1,1,1,0,1,0,1,0,1,1,0,1,0,0,1,0,0,0,0,0,0,1,1,0,1,1,1,1,1,0,0,0,1,0,1,0,0,0,1,0,0,0,1,0,1,1,0,1,0,1,0,1,0,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,1,1,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,0,0,1,1,1,0,0,1,0,1,1,1,0,1,0,0,1,1,1,0,0,1,1,1,1,1,0,0,1,];
var gg_b = "1748736001/";

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
