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
case 937:
case 3955:
case 2230:
case 804:
case 3311:
case 1465:
case 3027:
case 3944:
case 179:
case 1743:
case 272:
case 3457:
case 700:
case 3211:
case 2983:
case 3543:
case 1967:
case 3605:
case 1040:
case 3411:
case 760:
case 940:
case 3538:
case 795:
case 1529:
case 389:
case 2137:
case 2161:
case 2599:
case 4047:
case 2014:
case 2786:
case 648:
case 3682:
case 1214:
case 1733:
case 2065:
case 3533:
case 3995:
case 911:
case 355:
case 803:
case 3512:
case 1314:
case 2859:
case 3497:
case 3171:
case 3416:
case 1712:
case 3101:
case 175:
case 2147:
case 4037:
case 2440:
case 638:
case 1748:
case 3397:
case 2665:
case 7:
case 628:
case 3548:
case 385:
case 1924:
case 1047:
case 523:
case 1304:
case 3111:
case 1772:
case 398:
case 2593:
case 3250:
case 1702:
case 2935:
case 533:
case 4040:
case 676:
case 3350:
case 3306:
case 3926:
case 2989:
case 2893:
case 3549:
case 284:
case 1165:
case 2558:
case 3872:
case 1066:
case 3206:
case 3276:
case 543:
case 4030:
case 788:
case 2862:
case 2140:
case 3271:
case 3615:
case 701:
case 2447:
case 931:
case 1037:
case 2674:
case 1114:
case 253:
case 3585:
case 3301:
case 3921:
case 3839:
case 2347:
case 2004:
case 2562:
case 2598:
case 475:
case 758:
case 3471:
case 283:
case 3197:
case 1650:
case 1753:
case 2201:
case 1105:
case 3366:
case 2615:
case 1220:
case 3140:
case 1076:
case 1006:
case 4011:
case 2839:
case 353:
case 842:
case 68:
case 519:
case 3674:
case 1900:
case 173:
case 1320:
case 2390:
case 1970:
case 916:
case 3853:
case 3562:
case 1798:
case 822:
case 1050:
case 2490:
case 1420:
case 2471:
case 890:
case 2116:
case 677:
case 1676:
case 383:
case 71:
case 670:
case 2885:
case 2849:
case 1601:
case 3935:
case 2250:
case 3858:
case 2476:
case 1215:
case 2064:
case 354:
case 174:
case 3994:
case 2620:
case 2502:
case 1951:
case 809:
case 2802:
case 452:
case 1758:
case 384:
case 3558:
case 2376:
case 1917:
case 4016:
case 3989:
case 2549:
case 2926:
case 1071:
case 2664:
case 2276:
case 1090:
case 3337:
case 2533:
case 4050:
case 1375:
case 2995:
case 529:
case 3340:
case 3065:
case 946:
case 1611:
case 1057:
case 2416:
case 2512:
case 3240:
case 539:
case 1120:
case 255:
case 2190:
case 936:
case 1011:
case 3440:
case 1164:
case 2297:
case 2833:
case 1475:
case 3147:
case 473:
case 72:
case 3988:
case 2548:
case 285:
case 2812:
case 549:
case 1977:
case 2316:
case 812:
case 3665:
case 2397:
case 706:
case 4076:
case 1910:
case 1282:
case 2838:
case 562:
case 2605:
case 3899:
case 3983:
case 1115:
case 2211:
case 2005:
case 2538:
case 2257:
case 1616:
case 671:
case 1697:
case 2411:
case 2627:
case 2106:
case 891:
case 1482:
case 3786:
case 3884:
case 3430:
case 2357:
case 182:
case 2843:
case 545:
case 474:
case 3137:
case 1586:
case 422:
case 1085:
case 2249:
case 3537:
case 1186:
case 2850:
case 465:
case 3199:
case 2138:
case 1639:
case 771:
case 2349:
case 344:
case 3358:
case 2576:
case 2143:
case 112:
case 3837:
case 4033:
case 1039:
case 3715:
case 3458:
case 2774:
case 334:
case 2704:
case 3393:
case 2302:
case 4012:
case 1992:
case 405:
case 3298:
case 3159:
case 1820:
case 469:
case 3262:
case 2148:
case 2890:
case 2339:
case 1649:
case 606:
case 852:
case 343:
case 3023:
case 1564:
case 1747:
case 1002:
case 3547:
case 3764:
case 1072:
case 3866:
case 3720:
case 2571:
case 2385:
case 2501:
case 2590:
case 3253:
case 1520:
case 3566:
case 323:
case 4043:
case 3847:
case 3353:
case 1049:
case 598:
case 666:
case 1766:
case 3484:
case 105:
case 249:
case 1386:
case 142:
case 1033:
case 2765:
case 1648:
case 2338:
case 3158:
case 190:
case 555:
case 3499:
case 3782:
case 1048:
case 39:
case 2857:
case 122:
case 4085:
case 3193:
case 2102:
case 3284:
case 1612:
case 491:
case 3359:
case 589:
case 1043:
case 2412:
case 109:
case 2348:
case 1638:
case 1527:
case 75:
case 2139:
case 4049:
case 874:
case 3162:
case 956:
case 1481:
case 2686:
case 3629:
case 2433:
case 2816:
case 2233:
case 1281:
case 2185:
case 78:
case 1827:
case 4072:
case 2086:
case 559:
case 4002:
case 2312:
case 1575:
case 2333:
case 1038:
case 1505:
case 1381:
case 2980:
case 2212:
case 3597:
case 1084:
case 196:
case 3348:
case 345:
case 2727:
case 1797:
case 2359:
case 661:
case 1814:
case 3412:
case 302:
case 3686:
case 1128:
case 3248:
case 464:
case 2198:
case 3312:
case 2459:
case 1514:
case 335:
case 3448:
case 3086:
case 3185:
case 404:
case 4093:
case 3233:
case 3816:
case 2540:
case 1932:
case 1684:
case 325:
case 3333:
case 601:
case 362:
case 3443:
case 1757:
case 1909:
case 349:
case 463:
case 3557:
case 1918:
case 2299:
case 1229:
case 3081:
case 3765:
case 1659:
case 980:
case 2530:
case 3857:
case 29:
case 2782:
case 339:
case 1429:
case 776:
case 3681:
case 2499:
case 950:
case 3172:
case 1711:
case 3102:
case 3438:
case 2284:
case 957:
case 403:
case 3243:
case 214:
case 3871:
case 243:
case 1658:
case 3339:
case 3801:
case 879:
case 981:
case 1228:
case 728:
case 699:
case 2547:
case 3239:
case 1093:
case 1908:
case 2453:
case 1978:
case 2362:
case 738:
case 104:
case 1771:
case 3112:
case 951:
case 3590:
case 315:
case 1701:
case 2253:
case 3385:
case 3439:
case 2720:
case 233:
case 164:
case 4084:
case 2498:
case 1058:
case 968:
case 2353:
case 1428:
case 2847:
case 3285:
case 223:
case 695:
case 3249:
case 583:
case 1662:
case 103:
case 244:
case 1423:
case 3576:
case 3506:
case 2493:
case 4059:
case 1804:
case 3138:
case 3402:
case 1776:
case 3472:
case 1653:
case 553:
case 1750:
case 3202:
case 600:
case 1223:
case 224:
case 2861:
case 3922:
case 1504:
case 2393:
case 3704:
case 3774:
case 1098:
case 2745:
case 2622:
case 2570:
case 2500:
case 2252:
case 2591:
case 1985:
case 3113:
case 3408:
case 3132:
case 2856:
case 1180:
case 2754:
case 3419:
case 2352:
case 2263:
case 316:
case 3219:
case 3278:
case 467:
case 2022:
case 2363:
case 2452:
case 3378:
case 2556:
case 3928:
case 1222:
case 2292:
case 2551:
case 2268:
case 217:
case 3273:
case 2087:
case 3524:
case 2735:
case 2368:
case 1972:
case 551:
case 378:
case 3303:
case 1724:
case 3373:
case 4069:
case 1760:
case 2687:
case 3179:
case 3560:
case 1949:
case 188:
case 499:
case 1052:
case 4:
case 3726:
case 4068:
case 4092:
case 550:
case 57:
case 557:
case 1912:
case 2807:
case 1534:
case 36:
case 1380:
case 1595:
case 2269:
case 848:
case 2152:
case 160:
case 167:
case 779:
case 2788:
case 336:
case 30:
case 587:
case 580:
case 1948:
case 2825:
case 2163:
case 1187:
case 3119:
case 1895:
case 1480:
case 1731:
case 3342:
case 1544:
case 488:
case 2680:
case 3567:
case 1:
case 292:
case 1943:
case 230:
case 3479:
case 401:
case 237:
case 3846:
case 4052:
case 3531:
case 199:
case 1122:
case 3242:
case 2168:
case 3103:
case 1669:
case 972:
case 604:
case 3831:
case 3309:
case 247:
case 3379:
case 3867:
case 3318:
case 1844:
case 3442:
case 3209:
case 3279:
case 3218:
case 1855:
case 2810:
case 2409:
case 337:
case 2567:
case 2418:
case 3783:
case 1632:
case 106:
case 1984:
case 2173:
case 327:
case 2755:
case 12:
case 3510:
case 959:
case 14:
case 494:
case 4078:
case 2318:
case 4008:
case 556:
case 340:
case 1883:
case 0:
case 2831:
case 347:
case 3810:
case 2218:
case 3080:
case 2279:
case 2209:
case 166:
case 1032:
case 246:
case 4073:
case 3877:
case 3369:
case 1079:
case 2541:
case 3525:
case 311:
case 2795:
case 1725:
case 2332:
case 752:
case 3469:
case 3788:
case 3507:
case 20:
case 2108:
case 493:
case 1618:
case 1679:
case 317:
case 2273:
case 2203:
case 609:
case 310:
case 3292:
case 3268:
case 4032:
case 2860:
case 2142:
case 11:
case 1535:
case 44:
case 2923:
case 3817:
case 3794:
case 1019:
case 278:
case 3392:
case 3735:
case 2118:
case 2179:
case 42:
case 1619:
case 3687:
case 3789:
case 2726:
case 3492:
case 669:
case 1717:
case 3468:
case 3596:
case 2473:
case 1673:
case 1545:
case 1770:
case 1791:
case 3500:
case 3570:
case 2721:
case 4042:
case 1953:
case 2408:
case 632:
case 85:
case 877:
case 2208:
case 690:
case 2278:
case 697:
case 3891:
case 622:
case 1003:
case 3556:
case 1756:
case 1854:
case 3022:
case 3363:
case 945:
case 2336:
case 894:
case 3277:
case 790:
case 797:
case 81:
case 1388:
case 1031:
case 2813:
case 2236:
case 3927:
case 3869:
case 3377:
case 1154:
case 2780:
case 3975:
case 2341:
case 2436:
case 1631:
case 2532:
case 3644:
case 1940:
case 3477:
case 3569:
case 3225:
case 286:
case 2513:
case 2241:
case 1145:
case 1488:
case 3170:
case 705:
case 1769:
case 962:
case 3100:
case 742:
case 526:
case 1041:
case 949:
case 2688:
case 1189:
case 2246:
case 3117:
case 2518:
case 536:
case 18:
case 2160:
case 2431:
case 2509:
case 2579:
case 2467:
case 893:
case 56:
case 1135:
case 2231:
case 939:
case 3310:
case 1036:
case 3695:
case 350:
case 357:
case 1641:
case 2331:
case 2542:
case 15:
case 177:
case 546:
case 170:
case 1930:
case 3964:
case 308:
case 2578:
case 2035:
case 82:
case 2787:
case 1947:
case 2136:
case 1454:
case 2519:
case 1445:
case 2689:
case 3491:
case 2819:
case 3291:
case 3552:
case 4067:
case 3125:
case 351:
case 2089:
case 3026:
case 2808:
case 368:
case 1254:
case 3391:
case 2635:
case 1060:
case 1345:
case 3370:
case 2260:
case 791:
case 1389:
case 2873:
case 477:
case 45:
case 3021:
case 2045:
case 2360:
case 2146:
case 1937:
case 3296:
case 4036:
case 1792:
case 3417:
case 1768:
case 2645:
case 2722:
case 919:
case 3592:
case 3915:
case 2654:
case 1235:
case 1294:
case 4007:
case 3873:
case 4077:
case 3424:
case 3260:
case 541:
case 2892:
case 2296:
case 2217:
case 3146:
case 1226:
case 2021:
case 418:
case 675:
case 944:
case 1091:
case 1656:
case 2251:
case 1703:
case 531:
case 924:
case 2592:
case 1600:
case 3974:
case 1522:
case 2110:
case 3324:
case 1773:
case 3573:
case 2621:
case 3722:
case 704:
case 138:
case 3503:
case 934:
case 521:
case 2351:
case 800:
case 807:
case 1144:
case 3131:
case 3654:
case 2915:
case 128:
case 2852:
case 2563:
case 1587:
case 3035:
case 3508:
case 208:
case 1719:
case 2964:
case 943:
case 2491:
case 1617:
case 1696:
case 3689:
case 899:
case 2470:
case 1017:
case 2200:
case 2456:
case 1651:
case 933:
case 2026:
case 3089:
case 2270:
case 1887:
case 251:
case 2125:
case 3819:
case 476:
case 517:
case 923:
case 3694:
case 2920:
case 2300:
case 4010:
case 2370:
case 510:
case 1321:
case 268:
case 2391:
case 3965:
case 1677:
case 2196:
case 2034:
case 2410:
case 1025:
case 3579:
case 280:
case 3467:
case 1718:
case 3346:
case 3160:
case 3518:
case 1957:
case 1779:
case 1355:
case 4070:
case 511:
case 1244:
case 2310:
case 99:
case 3267:
case 914:
case 1255:
case 2210:
case 1344:
case 257:
case 27:
case 3331:
case 1742:
case 3367:
case 3879:
case 2055:
case 3336:
case 1010:
case 2156:
case 1880:
case 2869:
case 1916:
case 3236:
case 2307:
case 2927:
case 356:
case 861:
case 2044:
case 176:
case 540:
case 3083:
case 547:
case 913:
case 1334:
case 520:
case 4051:
case 3436:
case 3341:
case 2975:
case 888:
case 2655:
case 2100:
case 1713:
case 530:
case 386:
case 1121:
case 2225:
case 3241:
case 2477:
case 1295:
case 480:
case 2773:
case 1110:
case 2155:
case 1251:
case 2703:
case 1568:
case 1592:
case 487:
case 2056:
case 2691:
case 1417:
case 3489:
case 2426:
case 2144:
case 743:
case 4034:
case 3294:
case 963:
case 3183:
case 3235:
case 2950:
case 2906:
case 1317:
case 1396:
case 47:
case 723:
case 1868:
case 450:
case 3937:
case 3289:
case 1296:
case 2000:
case 1217:
case 1451:
case 2091:
case 371:
case 558:
case 2134:
case 1026:
case 3752:
case 1200:
case 4044:
case 744:
case 2651:
case 2195:
case 3966:
case 1863:
case 3245:
case 151:
case 2221:
case 4055:
case 1370:
case 3624:
case 1920:
case 561:
case 1300:
case 840:
case 168:
case 3254:
case 847:
case 3060:
case 3947:
case 3024:
case 1563:
case 820:
case 3454:
case 108:
case 3763:
case 588:
case 837:
case 3445:
case 2617:
case 892:
case 830:
case 2244:
case 1310:
case 560:
case 218:
case 4021:
case 2911:
case 841:
case 3135:
case 1634:
case 1982:
case 683:
case 370:
case 3930:
case 2255:
case 1151:
case 3383:
case 3641:
case 2625:
case 1034:
case 3189:
case 831:
case 1117:
case 1095:
case 500:
case 3636:
case 180:
case 2718:
case 2444:
case 653:
case 2334:
case 684:
case 3940:
case 2580:
case 2732:
case 1905:
case 2713:
case 2610:
case 2234:
case 1100:
case 1191:
case 2121:
case 1225:
case 1407:
case 1425:
case 3646:
case 1156:
case 3288:
case 468:
case 2434:
case 996:
case 1044:
case 1927:
case 2916:
case 3067:
case 1436:
case 3732:
case 1341:
case 52:
case 3395:
case 1780:
case 2940:
case 3580:
case 3334:
case 186:
case 53:
case 749:
case 2046:
case 969:
case 3234:
case 2288:
case 3880:
case 878:
case 1336:
case 1441:
case 3010:
case 376:
case 739:
case 1083:
case 2067:
case 54:
case 3997:
case 3916:
case 1236:
case 1813:
case 156:
case 2135:
case 1231:
case 318:
case 3355:
case 932:
case 990:
case 2036:
case 2641:
case 1809:
case 745:
case 4054:
case 3625:
case 816:
case 3742:
case 1446:
case 702:
case 2383:
case 1367:
case 1879:
case 270:
case 2930:
case 3077:
case 922:
case 1542:
case 3007:
case 25:
case 277:
case 2041:
case 942:
case 2189:
case 725:
case 28:
case 3957:
case 1579:
case 1467:
case 1431:
case 1141:
case 3887:
case 3221:
case 3195:
case 2354:
case 1878:
case 2752:
case 3096:
case 3651:
case 271:
case 594:
case 1808:
case 1635:
case 3321:
case 3971:
case 2254:
case 2624:
case 1787:
case 1508:
case 1035:
case 2660:
case 3719:
case 1578:
case 3778:
case 1094:
case 1519:
case 2454:
case 3708:
case 3587:
case 2947:
case 3696:
case 3051:
case 2445:
case 1573:
case 2335:
case 2792:
case 338:
case 1503:
case 3056:
case 2394:
case 912:
case 3155:
case 1974:
case 3600:
case 1904:
case 3522:
case 3773:
case 3950:
case 2235:
case 836:
case 1654:
case 1167:
case 3144:
case 1260:
case 1424:
case 3822:
case 4088:
case 1803:
case 348:
case 2389:
case 1873:
case 2435:
case 1045:
case 3091:
case 3656:
case 3226:
case 2289:
case 1318:
case 2013:
case 1442:
case 3746:
case 1546:
case 1831:
case 478:
case 1867:
case 2999:
case 2883:
case 982:
case 3855:
case 3938:
case 1209:
case 266:
case 1279:
case 1567:
case 2583:
case 1409:
case 1744:
case 1846:
case 399:
case 3731:
case 206:
case 2984:
case 3767:
case 1103:
case 1173:
case 22:
case 619:
case 300:
case 2959:
case 307:
case 2588:
case 1413:
case 2042:
case 2618:
case 1178:
case 3480:
case 1108:
case 3834:
case 126:
case 1841:
case 2609:
case 2679:
case 2018:
case 577:
case 2888:
case 2009:
case 2079:
case 3280:
case 3933:
case 360:
case 1541:
case 3534:
case 2725:
case 3380:
case 1795:
case 1118:
case 1560:
case 1109:
case 2619:
case 2796:
case 3052:
case 662:
case 1824:
case 1726:
case 3422:
case 301:
case 3949:
case 3526:
case 2835:
case 1473:
case 625:
case 388:
case 645:
case 1203:
case 3652:
case 602:
case 1142:
case 1860:
case 3222:
case 571:
case 294:
case 2078:
case 3724:
case 2993:
case 3826:
case 1524:
case 3063:
case 2594:
case 178:
case 1208:
case 2845:
case 116:
case 1219:
case 798:
case 446:
case 1378:
case 2962:
case 1308:
case 2073:
case 1928:
case 2756:
case 3092:
case 2854:
case 1319:
case 3521:
case 3985:
case 2791:
case 3692:
case 2554:
case 2953:
case 1478:
case 3180:
case 436:
case 1891:
case 850:
case 3845:
case 87:
case 2287:
case 2939:
case 1870:
case 3854:
case 2092:
case 2387:
case 3998:
case 754:
case 3962:
case 1556:
case 2668:
case 1500:
case 1622:
case 121:
case 2521:
case 3673:
case 3545:
case 880:
case 1169:
case 393:
case 3603:
case 2180:
case 1754:
case 538:
case 1463:
case 3554:
case 1352:
case 3619:
case 2663:
case 3608:
case 1851:
case 427:
case 1517:
case 3589:
case 492:
case 1789:
case 1492:
case 437:
case 1468:
case 1551:
case 2222:
case 31:
case 117:
case 110:
case 2652:
case 3594:
case 1368:
case 1087:
case 3535:
case 2826:
case 1817:
case 3078:
case 1469:
case 772:
case 1507:
case 207:
case 3588:
case 624:
case 431:
case 200:
case 3959:
case 1825:
case 2187:
case 1163:
case 2736:
case 634:
case 2834:
case 421:
case 3618:
case 3079:
case 4022:
case 2280:
case 3009:
case 295:
case 1807:
case 3018:
case 1369:
case 2380:
case 518:
case 2534:
case 3725:
case 3642:
case 975:
case 2741:
case 644:
case 267:
case 260:
case 2933:
case 576:
case 868:
case 140:
case 3883:
case 4087:
case 1986:
case 2844:
case 2746:
case 3013:
case 2069:
case 851:
case 3032:
case 2938:
case 417:
case 2855:
case 2767:
case 1783:
case 643:
case 3632:
case 33:
case 306:
case 299:
case 192:
case 2:
case 130:
case 2555:
case 808:
case 2122:
case 1510:
case 881:
case 3710:
case 127:
case 2669:
case 787:
case 1029:
case 2514:
case 780:
case 1459:
case 2913:
case 3827:
case 4023:
case 2932:
case 1705:
case 1540:
case 1775:
case 3740:
case 3527:
case 296:
case 1359:
case 750:
case 2716:
case 3805:
case 1629:
case 976:
case 854:
case 1840:
case 1259:
case 433:
case 19:
case 1384:
case 575:
case 2059:
case 883:
case 332:
case 2429:
case 3048:
case 2711:
case 2123:
case 1193:
case 305:
case 3386:
case 3012:
case 2979:
case 2918:
case 621:
case 1484:
case 434:
case 1158:
case 3648:
case 424:
case 2701:
case 647:
case 3672:
case 2790:
case 2428:
case 3049:
case 1498:
case 3864:
case 3766:
case 1462:
case 2058:
case 123:
case 143:
case 1159:
case 1298:
case 3820:
case 637:
case 630:
case 692:
case 1764:
case 4029:
case 1866:
case 1362:
case 627:
case 1398:
case 3564:
case 204:
case 2093:
case 1453:
case 3039:
case 2750:
case 2223:
case 312:
case 928:
case 3992:
case 3968:
case 2098:
case 134:
case 708:
case 2973:
case 3186:
case 1199:
case 1258:
case 203:
case 948:
case 2662:
case 3761:
case 768:
case 2698:
case 1628:
case 3737:
case 3639:
case 1493:
case 49:
case 611:
case 2874:
case 2706:
case 119:
case 1550:
case 3223:
case 1143:
case 2515:
case 1272:
case 2039:
case 885:
case 1202:
case 2685:
case 1704:
case 1806:
case 1876:
case 3062:
case 3903:
case 3323:
case 1774:
case 2992:
case 626:
case 1372:
case 3504:
case 1922:
case 855:
case 2085:
case 303:
case 3698:
case 1249:
case 1850:
case 3804:
case 1138:
case 1402:
case 1472:
case 439:
case 3423:
case 66:
case 1506:
case 3053:
case 1501:
case 1385:
case 971:
case 1439:
case 364:
case 2520:
case 2672:
case 2602:
case 291:
case 574:
case 1285:
case 402:
case 2181:
case 445:
case 2864:
case 3058:
case 2049:
case 1148:
case 462:
case 1890:
case 3228:
case 1871:
case 1485:
case 3908:
case 2747:
case 3978:
case 304:
case 2564:
case 3919:
case 4086:
case 1987:
case 2963:
case 2048:
case 297:
case 2633:
case 1857:
case 756:
case 2582:
case 129:
case 222:
case 3865:
case 1511:
case 970:
case 3123:
case 1172:
case 1102:
case 265:
case 2882:
case 786:
case 242:
case 2386:
case 1338:
case 2033:
case 1765:
case 2286:
case 1149:
case 1714:
case 1897:
case 1816:
case 1312:
case 1086:
case 2381:
case 1333:
case 162:
case 1212:
case 3932:
case 1348:
case 209:
case 145:
case 3797:
case 3716:
case 2043:
case 102:
case 1516:
case 396:
case 3084:
case 3128:
case 1248:
case 3699:
case 415:
case 1433:
case 2875:
case 2956:
case 3528:
case 829:
case 1728:
case 455:
case 2264:
case 1490:
case 1401:
case 1471:
case 1197:
case 485:
case 2650:
case 2753:
case 2105:
case 1201:
case 993:
case 2464:
case 2220:
case 1585:
case 1301:
case 2970:
case 3785:
case 3061:
case 3114:
case 1872:
case 459:
case 3474:
case 1306:
case 1926:
case 4027:
case 1664:
case 3647:
case 2090:
case 1450:
case 2415:
case 1276:
case 1111:
case 1476:
case 1250:
case 1406:
case 2690:
case 3924:
case 3047:
case 2793:
case 274:
case 1572:
case 2315:
case 4075:
case 716:
case 656:
case 2951:
case 802:
case 2164:
case 2405:
case 2881:
case 1297:
case 3414:
case 505:
case 1812:
case 542:
case 185:
case 819:
case 3030:
case 1397:
case 565:
case 2375:
case 1533:
case 1995:
case 2925:
case 2581:
case 1934:
case 1682:
case 3214:
case 1497:
case 3712:
case 1416:
case 2205:
case 590:
case 155:
case 1848:
case 3314:
case 2120:
case 597:
case 1075:
case 1005:
case 1106:
case 2616:
case 1176:
case 1411:
case 3040:
case 1357:
case 2482:
case 1729:
case 2586:
case 3465:
case 906:
case 2910:
case 3174:
case 1955:
case 252:
case 3967:
case 3829:
case 1150:
case 1605:
case 92:
case 1027:
case 736:
case 2382:
case 379:
case 3743:
case 3640:
case 3697:
case 2040:
case 823:
case 1599:
case 1161:
case 833:
case 1137:
case 2529:
case 1786:
case 3482:
case 1884:
case 454:
case 668:
case 1430:
case 2174:
case 1614:
case 9:
case 999:
case 3282:
case 608:
case 2465:
case 172:
case 3016:
case 3097:
case 484:
case 279:
case 2829:
case 2931:
case 3115:
case 1899:
case 900:
case 1147:
case 3405:
case 907:
case 453:
case 1440:
case 3011:
case 720:
case 3164:
case 3657:
case 824:
case 1665:
case 3759:
case 3327:
case 730:
case 2214:
case 1340:
case 995:
case 2941:
case 3375:
case 1166:
case 1240:
case 1859:
case 3120:
case 747:
case 3205:
case 3275:
case 184:
case 3996:
case 2165:
case 1261:
case 1558:
case 3917:
case 472:
case 1237:
case 1893:
case 2066:
case 2474:
case 1361:
case 3090:
case 901:
case 2647:
case 3001:
case 721:
case 988:
case 3071:
case 374:
case 2924:
case 961:
case 2702:
case 1858:
case 3215:
case 2772:
case 154:
case 2523:
case 3671:
case 3182:
case 1437:
case 2666:
case 3315:
case 3798:
case 2661:
case 1466:
case 3762:
case 1347:
case 1004:
case 3956:
case 1562:
case 3364:
case 1598:
case 3676:
case 3127:
case 1247:
case 4065:
case 3050:
case 717:
case 3264:
case 3220:
case 3464:
case 1140:
case 1862:
case 563:
case 1553:
case 2828:
case 3105:
case 1447:
case 1366:
case 2061:
case 3900:
case 2114:
case 3320:
case 1604:
case 2037:
case 3970:
case 1945:
case 153:
o = 1; break;
}
return o;
},
s: function(h) { var m = /(..)(.)$/.exec(h); return parseInt(m[2]+m[1], 16).toString(10); },
b: '1766268002/'
};


document.title="Hiatomi.la"
window.innerWidth=1;

var gg_m = [1,1,1,0,1,0,0,1,0,1,0,1,1,0,1,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,0,1,0,1,1,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,1,1,0,1,0,0,0,1,1,0,1,0,1,1,1,0,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,1,0,1,1,0,1,0,0,0,0,0,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,0,1,0,0,1,1,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,0,1,0,0,1,0,0,0,0,1,1,1,1,0,1,1,1,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,0,0,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,1,1,0,1,1,0,0,0,1,0,0,1,0,1,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,1,0,0,1,1,0,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,0,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,1,0,0,1,1,1,1,1,1,1,0,1,0,0,0,1,1,0,1,1,0,0,1,1,1,1,0,0,0,0,1,1,0,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,0,1,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,0,0,1,0,0,0,1,1,1,1,0,0,0,1,0,0,1,1,0,1,1,1,0,1,0,1,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,0,1,0,1,0,1,0,0,1,1,0,0,0,0,1,1,1,0,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,1,0,1,1,1,0,1,0,0,0,0,0,0,0,1,1,0,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,0,0,1,0,1,1,0,0,1,1,1,1,0,1,0,1,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,1,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,1,0,1,1,0,1,0,1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,0,0,1,1,1,0,0,0,0,1,1,0,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,1,1,1,1,0,1,0,1,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,0,0,1,0,0,1,1,1,0,0,0,1,0,0,1,1,1,1,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,1,0,0,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,1,1,1,0,0,1,1,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,1,1,0,0,0,1,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,0,0,0,0,0,1,0,0,0,0,1,1,0,0,1,1,0,0,1,0,0,0,1,1,1,1,1,0,0,1,1,0,1,1,1,0,0,1,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,1,1,0,1,1,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1,1,0,0,1,0,1,0,1,1,0,1,0,1,1,1,1,1,0,1,0,0,1,1,0,0,1,0,1,0,1,0,0,0,0,0,1,1,0,1,0,1,0,1,0,0,0,1,0,1,1,1,1,1,0,0,0,0,1,1,0,0,1,0,1,1,0,1,0,1,1,0,1,1,0,1,1,0,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,0,1,0,1,0,1,0,1,0,1,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,0,0,0,1,0,0,1,0,1,0,1,0,1,1,0,0,0,1,1,1,1,1,0,1,0,0,1,0,0,1,0,1,1,0,0,1,1,1,0,1,1,0,0,0,0,0,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,1,0,1,0,0,1,1,0,0,1,0,0,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,1,1,1,0,1,1,0,1,0,1,1,1,0,1,1,0,0,1,0,1,0,1,1,0,0,0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,1,0,1,0,0,1,0,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,0,0,0,1,1,0,1,0,0,1,0,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,0,1,0,0,1,1,0,0,0,0,0,1,1,1,0,0,0,0,1,0,0,1,0,0,1,1,1,1,0,0,1,1,0,0,0,0,0,1,1,0,1,0,1,1,1,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,1,0,1,0,0,0,0,0,0,1,1,1,1,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,1,1,1,1,1,0,0,0,0,0,1,1,1,1,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,0,1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,1,0,1,0,0,1,1,0,1,1,1,0,1,0,0,0,1,1,1,0,1,1,1,1,1,1,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,1,0,0,1,0,1,1,0,0,0,0,1,1,0,1,1,1,1,0,0,1,1,1,0,1,1,0,0,1,0,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,0,0,0,1,1,0,0,1,0,1,0,1,0,1,1,0,0,1,1,0,1,1,1,1,0,1,1,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,1,0,0,1,1,0,0,1,0,0,1,1,0,1,0,1,0,1,0,1,1,0,0,0,1,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,1,0,0,1,1,0,0,0,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,0,0,1,0,0,1,1,0,0,0,1,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,1,1,1,1,0,1,0,0,0,1,0,0,0,0,1,1,0,0,0,0,0,1,1,1,0,1,1,1,1,1,0,0,0,0,1,0,1,0,1,0,0,1,1,0,1,0,1,0,0,0,1,0,1,0,1,0,1,1,1,1,0,1,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,1,1,1,0,1,1,1,0,0,0,1,0,0,1,1,0,0,0,1,1,0,1,1,1,0,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,0,1,0,1,0,1,1,0,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,1,0,0,1,1,0,1,1,1,1,0,1,0,0,0,0,1,1,0,1,1,1,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,1,1,1,1,1,0,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,1,0,0,1,0,1,1,1,0,0,0,1,0,1,1,1,1,0,0,1,0,0,0,1,1,0,1,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,1,1,0,1,1,1,1,0,0,1,0,1,1,0,1,1,0,0,0,0,1,0,1,0,0,0,0,1,1,0,0,0,1,1,1,1,0,1,1,1,0,1,1,1,0,1,1,0,0,1,0,0,0,0,0,0,0,1,0,0,1,1,1,1,1,0,0,1,1,0,1,0,0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,0,1,0,0,0,1,1,0,1,0,0,0,0,1,1,1,0,1,0,0,1,0,0,0,0,1,1,0,1,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,1,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,1,1,1,0,0,0,0,1,1,1,0,1,0,0,1,1,1,0,1,0,0,0,1,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,1,0,0,0,1,1,0,0,1,0,0,1,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1,1,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,1,0,0,1,1,1,1,0,1,0,0,0,0,1,0,1,0,0,1,0,1,0,1,1,1,0,0,1,1,1,0,0,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,1,1,1,0,0,0,0,0,1,0,1,0,0,0,1,1,1,0,1,1,1,1,0,1,1,0,0,0,0,0,1,0,0,0,0,1,1,0,1,0,1,1,0,0,1,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,1,1,1,0,0,1,1,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,1,0,1,1,1,1,0,1,0,0,0,0,1,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,0,0,1,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,1,0,1,0,1,1,0,1,0,1,0,0,1,1,1,1,1,0,0,1,1,1,1,0,1,0,0,1,1,1,1,0,0,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,1,0,0,1,1,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,1,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,0,0,1,0,0,0,1,1,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,1,0,1,0,1,1,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,1,1,1,1,0,1,1,0,1,0,0,1,1,1,1,0,0,0,1,1,0,0,1,1,1,1,0,1,0,0,0,0,0,1,1,1,1,1,0,1,0,1,1,0,0,1,0,1,0,1,1,0,0,1,1,0,0,1,0,1,1,0,1,0,0,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,1,1,1,0,1,0,1,0,0,0,0,0,1,1,1,0,1,0,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,0,1,0,1,0,0,1,0,0,1,1,0,0,1,0,1,0,0,1,1,0,0,1,1,1,1,1,1,0,1,1,0,1,0,0,0,0,1,1,1,1,0,0,1,1,1,1,1,0,1,0,0,1,1,1,0,0,1,1,0,0,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,0,1,0,1,1,1,1,1,1,0,1,0,1,1,0,0,1,1,0,1,1,0,1,0,1,0,1,0,0,1,0,1,0,0,1,0,0,1,1,1,1,0,1,1,0,0,1,0,1,1,0,1,1,0,0,1,0,0,0,1,0,1,1,0,1,1,0,1,1,1,1,0,0,0,1,0,1,0,1,0,0,1,0,1,0,0,1,1,0,0,0,1,1,0,1,1,0,1,1,0,0,1,0,1,0,1,1,1,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,1,0,0,0,0,1,0,0,1,0,0,1,0,0,1,1,0,1,0,1,1,0,1,0,0,1,1,1,0,0,0,0,0,1,0,0,0,0,0,1,0,1,1,1,0,1,1,0,1,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1,1,0,1,1,1,0,1,1,0,1,0,0,1,0,1,1,0,1,0,1,0,0,0,0,1,0,1,1,0,0,0,0,1,0,1,1,0,0,1,1,0,1,1,1,0,1,0,1,0,0,0,0,0,1,0,0,1,1,0,1,1,1,1,1,0,0,1,0,1,1,1,0,1,1,0,0,0,0,1,0,1,0,1,1,1,0,0,1,0,1,0,1,1,1,0,1,0,1,0,1,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,1,0,0,0,0,1,0,1,1,1,1,0,1,0,1,0,1,1,0,0,1,0,0,1,0,1,0,0,1,0,0,0,0,0,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,1,0,0,1,0,0,0,1,0,0,1,1,1,1,0,1,0,1,1,1,0,0,1,1,0,1,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,1,1,1,1,0,1,0,0,0,0,1,1,0,0,0,1,1,0,1,0,0,1,0,1,1,1,1,1,1,0,0,0,0,1,0,0,0,1,0,1,0,1,0,0,1,1,0,0,1,1,0,1,0,1,1,1,0,0,0,0,1,1,0,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,1,0,1,1,1,1,1,1,1,0,0,0,0,0,1,1,0,0,0,1,0,0,0,1,1,0,1,1,0,1,1,0,0,0,0,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,1,0,0,0,1,1,0,1,0,1,0,0,1,0,0,1,0,1,0,0,0,0,0,1,1,1,0,0,0,0,0,1,1,1,0,1,1,0,0,0,0,0,1,1,1,1,0,1,0,1,1,1,0,0,0,1,0,1,1,0,0,1,1,0,0,1,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,1,1,0,1,0,1,1,0,1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0,0,1,0,0,1,0,1,1,0,0,0,0,1,1,1,0,1,0,0,1,0,1,1,1,1,1,0,1,1,0,0,1,1,0,0,1,0,0,0,0,1,0,1,0,0,1,1,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,0,1,1,0,1,1,1,0,0,0,1,0,0,0,0,1,1,1,0,0,0,1,0,1,1,0,1,1,1,0,1,1,0,0,1,0,1,1,1,0,0,1,0,1,1,1,1,0,1,1,0,0,0,1,0,0,0,0,0,1,0,1,1,1,1,0,1,1,0,1,1,1,1,0,0,0,0,0,1,1,1,1,1,0,0,0,1,1,0,0,];
var gg_b = "1766268002/";

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
